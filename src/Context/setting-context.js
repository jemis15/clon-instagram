import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const SettingContext = React.createContext();

export function SettingProvider(props) {
    const [settings, setSettings] = useState([]);
    const [loadingSettings, setLoadingSettings] = useState(true);

    useEffect(() => {
        async function loadSettings() {
            try {
                setLoadingSettings(true);
                const { data: apiSettings } = await Axios.get('/v1/settings');
                setSettings(apiSettings.data);
                setLoadingSettings(false);
            } catch (error) {
                setLoadingSettings(false);
                console.log(error);
            }
        }
        loadSettings();
    }, []);

    const value = { settings, loadingSettings };

    return <SettingContext.Provider value={value} {...props} />
}

export function useSetting() {
    const context = React.useContext(SettingContext);

    if (!context) {
        throw new Error('useSetting deve esta dentro del proveedor SettingContext');
    }

    return context;
}