import {combineReducers, createStore} from 'redux';

import {SettingsActionType, settingsReducer} from "../components/store/settings-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {StoreActionType, storeReducer} from "../components/store/store-reducer";
import {ProductActionType, productsReducer} from "../components/store/products-reducer";
import {LoginActionType, loginReducer} from "../components/store/login-reducer";


const rootReducer = combineReducers({
    settings: settingsReducer,
    items: storeReducer,
    products: productsReducer,
    loginUser: loginReducer,
})

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

type AllAction = SettingsActionType | StoreActionType | ProductActionType | LoginActionType

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AllAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;

