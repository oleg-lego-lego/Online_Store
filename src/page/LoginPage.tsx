import React from 'react';
import {LoginAccount} from "../components/login/LoginAccount";
import {useAppSelector} from "../app/store";

export const LoginPage = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    return (
        <div className={`login__bloc ${themeValue && 'dark'}`}>
            <LoginAccount/>
        </div>
    );
};
