import React from 'react';
import Switch from "react-switch";
import unitedKingdomIcon from "../../images/setting/unitedKingdom.svg";
import RussianFlag from "../../images/setting/rus.svg";
import {useAppSelector} from "../../app/store";
import {useTranslation} from "react-i18next";

export const Language = () => {
    const themeValue = useAppSelector(state => state.settings.theme)

    const {t, i18n} = useTranslation('settings');
    const toggleLanguage = () => i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru' ? 'ru' : 'en');

    return (
        <div className={`settings__item ${themeValue && 'dark'}`}>
            <span style={{alignItems: 'center', display: 'flex'}}>{t('Язык')}</span>
            <Switch
                id={'language'}
                onChange={toggleLanguage}
                checked={i18n.language === 'en'}
                checkedHandleIcon={<Icon icon={unitedKingdomIcon} value={true}/>}
                uncheckedHandleIcon={<Icon icon={RussianFlag} value={false}/>}
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
    const valueSize = value ? '40px' : '40px'

    const iconBloc: IconBlocType = {
        display: 'inline-block',
        borderRadius: '50%',
        overflow: 'hidden',
        width: '40px',
        height: '40px',
    };

    const iconStyle: IconStyleType = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    return (
        <div style={iconBloc}>
            <img src={icon} alt="" width={valueSize} height={valueSize} style={iconStyle}/>
        </div>
    );
};

type IconBlocType = {
    display: string
    borderRadius: string
    overflow: string
    width: string
    height: string
}

type IconStyleType = {
    width: string
    height: string
    objectFit: 'cover'
};

