import React, {useEffect, useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {setLogoutValueAC} from "../store/login-reducer";
import {useTranslation} from "react-i18next";
import {setMessageSnackbarAC} from "../store/settings-reducer";

export const IconNavLogout = () => {
    const dispatch = useAppDispatch()

    const {t} = useTranslation('header');

    const themeValue = useAppSelector(state => state.settings.theme)
    const registeredUser = useAppSelector(state => state.loginUser.registeredUser)

    const [showModal, setShowModal] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const handleYesClick = () => {
        dispatch(setLogoutValueAC(false))
        dispatch(setMessageSnackbarAC(t('Вы вышли из своего аккаунта'), 'success'))
        setShowModal(false);
    };

    const handleNoClick = () => {
        setShowModal(false);
    };

    return (
        <li className={"header__nav-item"}>
            <div className={`header__nav-link ${themeValue && 'dark'}`} onClick={openModal}>
                <FontAwesomeIcon icon={faRightFromBracket} size={'lg'}/>
                <span className={"header__nav-text"}>{t('Выйти')}</span>

                {showModal && (
                    <div className="modal" ref={modalRef} onClick={e => e.stopPropagation()}>
                        <div className="modal-content">
                            <p style={{fontSize:'10px'}}>{t('Пользователь')}: {registeredUser}</p>
                            <p>{t('вы хотите выйти?')}</p>
                            <button onClick={handleYesClick}>{t('Да')}</button>
                            <button onClick={handleNoClick}>{t('Нет')}</button>
                        </div>
                    </div>
                )}
            </div>
        </li>
    );
};

