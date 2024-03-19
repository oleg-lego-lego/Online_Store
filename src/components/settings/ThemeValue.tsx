import React, {SyntheticEvent, useEffect, useRef} from 'react';
import Switch from "react-switch";
import sunIcon from "../../images/setting/sun.svg";
import munIcon from "../../images/setting/moon.svg";
import {setThemeValueAC} from "../store/settings-reducer";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {useTranslation} from "react-i18next";



export const ThemeValue = () => {
    const dispatch = useAppDispatch()
    const isMounted = useRef(false)

    const {t} = useTranslation('settings');

    const themeValue = useAppSelector(state => state.settings.theme)

    const onChange = (checked: boolean, event: MouseEvent | SyntheticEvent<MouseEvent | KeyboardEvent, Event>) => {
        dispatch(setThemeValueAC(checked))
    }

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('themeChecked', JSON.stringify(themeValue));
        }

        isMounted.current = true
    }, [themeValue])

    return (
        <div className={`settings__item ${themeValue && 'dark'}`}>
            <span style={{alignItems: 'center', display: 'flex'}}>{t('Тема')}</span>
            <Switch
                id={'theme'}
                onChange={onChange}
                checked={themeValue}
                checkedHandleIcon={<Icon icon={munIcon} value={themeValue}/>}
                uncheckedHandleIcon={<Icon icon={sunIcon} value={themeValue}/>}
                checkedIcon={false}
                uncheckedIcon={false}
                onColor={'#377dff'}
                offColor={'#377dff'}
                handleDiameter={40}
                width={60}
                height={20}
                boxShadow="0 0 0 2px #377dff"
            />
        </div>
    );
};

const Icon = ({icon, value}: { icon: string, value: boolean }) => {
    const valueSize: string = value ? '25px' : '35px'

    const iconBloc: IconBlocStyleType = {
        backgroundColor: value ? 'black' : 'transparent',
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '50%'
    };

    const iconStyle: IconStyleType = {
        position: 'absolute',
        top: value ? '8px' : '2px',
        left: value ? '6px' : '2px',
    };


    return (
        <div style={iconBloc}>
            <img src={icon} alt="" width={valueSize} height={valueSize} style={iconStyle}/>
        </div>
    );
};

type IconBlocStyleType = {
    backgroundColor: string;
    position: 'relative';
    width: string;
    height: string;
    borderRadius: string;
}

type IconStyleType = {
    position: 'absolute';
    top: string;
    left: string;
}

