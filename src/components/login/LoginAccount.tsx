import React from 'react';
import {NavLink} from "react-router-dom";
import {FormControl, Paper} from "@mui/material";
import {LoginForm} from "./LoginForm";
import {PATH} from "../../PATH/PATH";
import {useAppSelector} from "../../app/store";
import {useTranslation} from "react-i18next";

export const LoginAccount = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    const {t} = useTranslation('login');

    return (
        <Paper className={`login__container ${themeValue && 'dark'}`} elevation={0}>
            <FormControl className="formControl">
                <h1 className="login__title">{t('Вход')}</h1>
                <LoginForm/>
            </FormControl>
            <p className="login__text">{t('Еще не регистрировались ?')}</p>
            <NavLink to={PATH.REGISTRATION} className={'signUpLink'}>{t('Зарегистрируйтесь')}</NavLink>
        </Paper>
    );
};
