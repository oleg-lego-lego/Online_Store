import React, {useEffect, useRef} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store";
import {PaginationOutlined} from "./Pagination";
import {setLogoutValueAC} from "../store/login-reducer";
import {Card} from "./Card";
import {LoaderCard} from "../skekiton/LoaderCard";

export const Home = () => {
    const dispatch = useAppDispatch()

    const logoutValue = useAppSelector(state => state.loginUser.logoutValue)
    const themeValue = useAppSelector(state => state.settings.theme)
    const redirectHomeValue = useAppSelector(state => state.loginUser.redirectHomeValue)
    const loadingCardValue = useAppSelector(state => state.settings.loadingCard)
    const items = useAppSelector(state => state.items)

    const isMounted = useRef(false)

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('setLogoutValue', JSON.stringify(logoutValue))
        }

        isMounted.current = true
    }, [logoutValue])


    useEffect(() => {
        if (redirectHomeValue) {
            dispatch(setLogoutValueAC(true))
        }
    }, [dispatch, redirectHomeValue])

    return (
        <section className={`home__bloc ${themeValue && 'dark'}`}>
            {
                !loadingCardValue && items.length
                    ? <Card/>
                    : <LoaderCard/>
            }

            {!loadingCardValue && items.length ? <PaginationOutlined/> : null}
        </section>
    );
};
