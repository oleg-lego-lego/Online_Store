import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../PATH/PATH";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";

type IconNavType = {
    path: PATH,
    themeValue: boolean,
    icon: IconProp
    title: string
}

export const IconNav: FC<IconNavType> = ({path, themeValue, icon, title}) => {
    const setActive = ({isActive}: { isActive: boolean }) => ({color: isActive ? '#72c0e1' : ''})

    return (
        <li className={"header__nav-item"}>
            <NavLink to={path} className={`header__nav-link ${themeValue && 'dark'}`} style={setActive}>
                <FontAwesomeIcon icon={icon} size={'lg'}/>
                <span className={"header__nav-text"}>{title}</span>
            </NavLink>
        </li>
    );
};
