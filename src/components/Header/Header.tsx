import React from 'react';
import logo from '../../images/header/logo.png'
import cart from '../../images/header/cart.svg'
import user from '../../images/header/user.svg'
import settings from '../../images/header/settings.svg'
import {NavLink} from "react-router-dom";
import {PATH} from "../../PATH/PATH";

export const Header = () => {
    return (
        <header>
            <nav className={"header__container"}>
                <div className={"header__bloc-logo"}>
                    <img width={60} height={60} src={logo} alt="logo"/>
                    <h3>React Store</h3>
                </div>

                <ul className={"header__nav-bloc"}>
                    <li className={"header__nav-item"}>
                        <NavLink to={PATH.SETTINGS} className={"header__nav-link"}>
                            <img src={cart} alt="корзина" width={30} height={30} className={"header__nav-icon"}/>
                            <span className={"header__nav-text"}>корзина</span>
                        </NavLink>
                    </li>
                    <li className={"header__nav-item"}>
                        <NavLink to={PATH.SETTINGS} className={"header__nav-link"}>
                            <img src={user} alt="пользователь" width={30} height={30} className={"header__nav-icon"}/>
                            <span>войти</span>
                        </NavLink>
                    </li>
                    <li className={"header__nav-item"}>
                        <NavLink to={PATH.SETTINGS} className={"header__nav-link"}>
                            <img src={settings} alt="пользователь" width={30} height={30}
                                 className={"header__nav-icon"}/>
                            <span>настройки</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

