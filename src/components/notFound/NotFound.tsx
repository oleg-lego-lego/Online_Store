import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../PATH/PATH";
import notFoundImg from "../../images/notFoundPage/page404.png"
import {useTranslation} from "react-i18next";


export const NotFound = () => {
    const {t} = useTranslation('notFound');

    return (
        <>
            <div className={'notFound__title-bloc'}>
                <h2>{t('Страница не найдена')}</h2>

                <NavLink to={PATH.HOME} style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <button className={'NavLink'}>{t('перейти на главную страницу')}</button>
                </NavLink>
            </div>

            <div className={'notFound__img-bloc'}>
                <img src={notFoundImg} alt={'not Found IMG'} className={'notFoundImg'}/>
            </div>
        </>
    );
};
