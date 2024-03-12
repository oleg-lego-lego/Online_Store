import {combineReducers, createStore} from 'redux';

import {SettingsActionType, settingsReducer} from "../components/store/settings-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {StoreActionType, storeReducer} from "../components/store/store-reducer";


const rootReducer = combineReducers({
    settings: settingsReducer,
    items: storeReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer);

type AllAction = SettingsActionType | StoreActionType

export type AppDispatchType = ThunkDispatch<AppRootStateType, any, AllAction>
export const useAppDispatch = () => useDispatch<AppDispatchType>()

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;

