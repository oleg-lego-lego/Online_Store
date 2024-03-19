import React, {useEffect, useRef} from 'react';
import {ShowPicture} from "./showPicture";
import ratingStar from "../../images/home/ratingStar.png";
import {useAppSelector} from "../../app/store";
import {useTranslation} from "react-i18next";

export const Product = () => {
    const {t} = useTranslation('product');

    const product = useAppSelector(state => state.products.product)
    const themeValue = useAppSelector(state => state.settings.theme)
    const discountedPrice = (product.price - (product.price / 100 * product.discountPercentage)).toFixed(2)

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('ProductChecked', JSON.stringify(product));
        }

        isMounted.current = true
    }, [product])

    return (
        <div className={`product__bloc ${themeValue && 'dark'}`}>
            <div className={`product__card ${themeValue && 'dark'}`}>
                <div className={'product__img-container'}>
                    <ShowPicture item={product.images}/>
                </div>

                <div className={`product_description__bloc ${themeValue && 'dark'}`}>
                    <div className={'product__title__bloc'}>
                        <div className={'product__container'}>
                            <span className={`product__text ${themeValue && 'dark'}`}>
                                {t('Бренд')}:
                            </span>

                            <span className={'product__text-description'}>{product.brand}</span>
                        </div>

                        <div className={'product__container'}>
                            <span className={`product__text ${themeValue && 'dark'}`}>
                                {t('Mодель')}:
                            </span>

                            <span className={'product__text-description'}>{product.title}</span>
                        </div>

                        <div className={'product__container'}>
                            <span className={`product__text ${themeValue && 'dark'}`}>
                                {t('Описание')}:
                            </span>

                            <span className={'product__text-description product__text-desc'}>
                                {product.description}
                            </span>
                        </div>
                    </div>
                    <div className={'product__container'}>
                        <span className={`product__text ${themeValue && 'dark'}`}>
                            {t('Цена со скидкой')}:
                        </span>

                        <span className={'product__discount product__text-description'}>
                            {discountedPrice}₽
                        </span>

                        <span className={'product__price product__text-description'}>
                            {product.price}₽
                        </span>
                    </div>

                    <div className={'product__rating'}>
                        <span className={`product__text ${themeValue && 'dark'}`}>
                            {t('Рейтинг')}:
                        </span>

                        <img src={ratingStar} alt="" width={'20'} className={'product__rating-img'}/>

                        <span className={'product__text-description'}>
                            {Number(product.rating).toFixed(1)}
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );
};

