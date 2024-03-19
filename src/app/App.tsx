import React, {useEffect} from 'react';
import './App.css';
import {Header} from "../components/header/Header";
import {Route, Routes} from "react-router-dom";
import {PATH} from "../PATH/PATH";
import {Settings} from "../components/settings/Settings";
import {useAppDispatch, useAppSelector} from "./store";
import {Home} from "../components/home/Home";
import {storeApi} from "../api/store-api";
import {getStoreItemsAC} from "../components/store/store-reducer";
import {
    setCountPageAC,
    setLoadingCardAC,
    setLoadingLineAC,
    setMessageSnackbarAC
} from "../components/store/settings-reducer";
import {ProductPage} from "../page/ProductPage";
import {Scroll} from "../components/scroll/Scroll";
import {LoginPage} from "../page/LoginPage";
import {NotFoundPage} from "../page/NotFoundPage";
import {RegistrationPage} from "../page/RegistrationPage";
import {LineLoading} from "../components/lineLoading/LineLoading";
import {MessageSnackbar} from "../components/snackBar/MessageSnackbar";


function App() {
    const dispatch = useAppDispatch()

    const themeValue = useAppSelector(state => state.settings.theme)
    const paginationRows = useAppSelector(state => state.settings.paginationRows)
    const paginationPage = useAppSelector(state => state.settings.pagePagination)
    const logoutValue = useAppSelector(state => state.loginUser.logoutValue)

    useEffect(() => {
        dispatch(setLoadingLineAC('loading'))
        dispatch(setLoadingCardAC(true))

        storeApi.getStore(paginationRows, paginationPage)
            .then(res => {
                dispatch(setCountPageAC(res.data.total))
                dispatch(getStoreItemsAC(res.data.products))
            })
            .catch(err => {
                dispatch(setMessageSnackbarAC(err.message, 'error'))
            })
            .finally(() => {
                dispatch(setLoadingCardAC(false))
                dispatch(setLoadingLineAC('idle'))
            })
    }, [dispatch, paginationRows, paginationPage])


    return (
        <div className={`containerApp ${themeValue && 'dark'}`}>
            <div className={`App ${themeValue && 'dark'}`}>
                <Header/>
                <LineLoading/>
                <Routes>
                    <Route path={PATH.HOME} element={<Home/>}/>
                    <Route path={PATH.PRODUCT + '/:id'} element={<ProductPage/>}/>
                    <Route path={PATH.SETTINGS} element={<Settings/>}/>
                    {!logoutValue &&
                        <>
                            <Route path={PATH.LOGIN} element={<LoginPage/>}/>
                            <Route path={PATH.REGISTRATION} element={<RegistrationPage/>}/>
                        </>
                    }
                    <Route path={PATH.NOT_FOUND} element={<NotFoundPage/>}/>
                </Routes>
            </div>
            <MessageSnackbar/>
            <Scroll showBelow={500}/>
        </div>
    );
}

export default App;
