import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import {PATH} from "../../PATH/PATH";
import ratingStar from "../../images/home/ratingStar.png";
import {useAppDispatch, useAppSelector} from "../../app/store";
import {setMessageSnackbarAC} from "../store/settings-reducer";
import {useTranslation} from "react-i18next";

export const Card = () => {
    const dispatch = useAppDispatch()

    const {t} = useTranslation('card');

    const logoutValue = useAppSelector(state => state.loginUser.logoutValue)
    const themeValue = useAppSelector(state => state.settings.theme)
    const items = useAppSelector(state => state.items)

    const redirectLogin = () => {
        dispatch(setMessageSnackbarAC(t('пожалуйста, зарегистрируйтесь!!!'), 'success'))
    }

    return (
        <div className={`items__bloc`}>
            {items.map(item => {
                    const discountPrice = (item.price - (item.price / 100 * item.discountPercentage))
                        .toFixed(2)

                    return (
                        <div key={item.id} className={`items__card ${themeValue && 'dark'}`}>
                            <div className={'items__img-container'}>
                                {!logoutValue &&
                                    <NavLink to={PATH.LOGIN}>
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            className={"favoritesFalse"}
                                            size={'2x'}
                                            onClick={redirectLogin}
                                        />
                                    </NavLink>
                                }

                                <Link to={PATH.PRODUCT + `/${item.id}`}>
                                    <img src={item.images[0]} alt="" width={'220'} className={'card__img'}/>
                                </Link>
                            </div>

                            <div className={'item__title__bloc'}>
                                <span className={'item__title'}>{item.title}</span>
                                <div className={'item__title-description'}> {item.description}</div>
                            </div>

                            <div className={'item__price-bloc'}>
                                <span className={'item__discount'}>{discountPrice} ₽</span>

                                <span className={'item__price'}>{item.price} ₽</span>
                            </div>

                            <div className={'rating__bloc'}>
                                <img src={ratingStar} alt="" width={'20'} className={'rating__img'}/>

                                <span>{Number(item.rating).toFixed(1)}</span>
                            </div>
                        </div>
                    )
                }
            )}
        </div>
    );
};

