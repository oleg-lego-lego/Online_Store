import React, {useEffect} from 'react';
import {storeApi} from "../api/store-api";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../app/store";
import {getProductsItemAC} from "../components/store/products-reducer";
import {Product} from "../components/product/Product";
import {LoaderProduct} from "../components/skekiton/LoaderProduct";
import {setLoadingLineAC, setLoadingProductAC, setMessageSnackbarAC} from "../components/store/settings-reducer";

export const ProductPage = () => {
    const dispatch = useAppDispatch()
    const product = useAppSelector(state => state.products.product)
    const loadingProductValue = useAppSelector(state => state.settings.loadingProduct)

    const {id} = useParams()

    useEffect(() => {
        dispatch(setLoadingLineAC('loading'))
        dispatch(setLoadingProductAC(true))

        if (id) {
            storeApi.getCardProduct(id)
                .then(res => {
                    dispatch(getProductsItemAC(res.data))
                    setTimeout(() => {
                        dispatch(setLoadingLineAC('idle'))
                        dispatch(setLoadingProductAC(false))
                    }, 1000)
                })
                .catch(err => {
                    dispatch(setMessageSnackbarAC(err.message, 'error'))
                })
        }
    }, [dispatch, id])


    return (
        <>
            {
                !loadingProductValue && product
                    ? <Product/>
                    : <LoaderProduct/>
            }
        </>
    );
};
