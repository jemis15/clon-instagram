import React, { useEffect, useMemo, useState } from 'react';
import { setToken, getToken, deleteToken } from '../Helpers/auth-helpers';

const UserContext = React.createContext();

export function UserProvider(props) {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        async function loadUser() {
            if (!getToken()) {
                setLoadingUser(false);
                return;
            }

            try {
                setLoadingUser(true);
                const { data: apiUser } = await Axios({
                    method: 'POST',
                    url: '/apimuni/users/whoami',
                    params: { token: getToken() }
                });
                setUser(apiUser);
                setLoadingUser(false);
                document.body.classList.add('logged-in');
            } catch (error) {
                console.log(error);
                setLoadingUser(false);
            }
        }
        loadUser();
    }, []);

    async function login(user) {
        const { data: apiUser } = await Axios({
            method: 'POST',
            url: '/apimuni/auth',
            params: user
        });

        setToken(apiUser.token);
        setUser(apiUser);
        document.body.classList.add('logged-in');
    }

    function logout() {
        deleteToken();
        setUser(null);
        document.body.classList.remove('logged-in');
    }

    const value = useMemo({
        user,
        loadingUser,
        login,
        logout
    }, [usuario, loadingUser]);

    return <UserProvider.Provider value={value} {...props} />
}

export function useUser () {
    const context = React.useContext(UserContext);

    if (!context) {
        throw new Error('useUser deve esta dentro del proveedor UsuarioContext');
    }

    return context;
}