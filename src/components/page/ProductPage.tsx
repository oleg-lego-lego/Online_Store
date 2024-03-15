import React, {useEffect} from 'react';
import {storeApi} from "../../api/store-api";
import {useParams} from "react-router-dom";
import {useAppDispatch} from "../../app/store";
import {getProductsItemAC} from "../store/products-reducer";
import {Product} from "../product/Product";

export const ProductPage = () => {
    const dispatch = useAppDispatch()

    const {id} = useParams()

    useEffect(() => {
        if (id) {
            storeApi.getCartASD(id).then(res => {
                dispatch(getProductsItemAC(res.data))
            })
        }
    }, [dispatch, id])


    return (
        <>
            <Product/>
        </>
    );
};
