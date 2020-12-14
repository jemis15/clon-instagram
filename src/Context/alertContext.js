import React, { useContext, useMemo } from 'react';

const AlertContext = React.createContext();
let timeoutAlert;
export function ErrorContext(props) {
    const [alert, setAlert] = useState(null);

    const showAlert = (type, mensaje) => {
        setAlert({ ...alert, type, mensaje, show: true });
        clearTimeout(timeoutAlert)
        timeoutAlert = setTimeout(() => {
            setAlert({ ...alert, show: false });
        }, 8000);
    }
    const hideAlert = () => {
        setAlert({ ...alert, show: false });
        clearTimeout(timeoutAlert);
    }

    const data = useMemo({
        alert,
        showAlert,
        hideAlert
    }, [alert]);

    return <AlertContext value={data} {...props} />
}

export function useAlert() {
    const alert = useContext(AlertContext);

    if (!error) {
        throw new Error('useAlert deve estar dentro del proveedor ErrorContext');
    }

    return alert;
}