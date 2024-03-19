import React from 'react';
import {NavLink} from "react-router-dom";
import {FormControl, Paper} from "@mui/material";
import {PATH} from "../../PATH/PATH";
import {RegisterForm} from "./RegisterForm";
import {useAppSelector} from "../../app/store";
import {useTranslation} from "react-i18next";

export const Registration = () => {
    const themeValue = useAppSelector(state => state.settings.theme)
    const {t} = useTranslation('login');

    return (
        <Paper className={`login__container ${themeValue && 'dark'}`} elevation={0}>
            <FormControl className="formControl">
                <h1 className="login__title">{t('Регистрация')}</h1>
                <RegisterForm/>
            </FormControl>
            <p className="login__text">{t('Уже есть аккаунт?')}</p>
            <NavLink to={PATH.LOGIN} className="signUpLink">{t('Войти')}</NavLink>
        </Paper>
    );
};