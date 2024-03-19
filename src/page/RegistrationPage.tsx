import React from 'react';
import {Registration} from "../components/registration/Registration";
import {useAppSelector} from "../app/store";

export const RegistrationPage = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    return (
        <div className={`registration__bloc ${themeValue && 'dark'}`}>
            <Registration/>
        </div>
    );
};
