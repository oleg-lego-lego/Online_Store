import React from 'react';
import logo from '../../images/header/logo.png'
import {PATH} from "../../PATH/PATH";
import {faCartShopping, faGear, faUser} from "@fortawesome/free-solid-svg-icons";
import {useAppSelector} from "../../app/store";
import {IconNav} from "./IconNav";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

export const Header = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    const {t} = useTranslation('header');

    return (
        <header>
            <nav className={`header__container ${themeValue && 'dark'}`}>
                <NavLink to={PATH.HOME} className={`header__bloc-logo ${themeValue && 'dark'}`}>
                    <img width={60} height={60} src={logo} alt="logo"/>
                    <h3>React Store</h3>
                </NavLink>

                <ul className={"header__nav-bloc"}>
                    <IconNav
                        title={t('корзина')}
                        path={PATH.CART}
                        themeValue={themeValue}
                        icon={faCartShopping}
                    />

                    <IconNav
                        title={t('войти')}
                        path={PATH.LOGIN}
                        themeValue={themeValue}
                        icon={faUser}
                    />

                    <IconNav
                        title={t('настройки')}
                        path={PATH.SETTINGS}
                        themeValue={themeValue}
                        icon={faGear}
                    />
                </ul>
            </nav>
        </header>
    );
};

