import {getThemeLS} from "../../utils/localStorage/getThemeLS";
import {getPaginationRowsLS} from "../../utils/localStorage/getPaginationRowsLS";

type LoadingLineType = 'idle' | 'loading'

const initialState = {
    theme: getThemeLS(),
    paginationRows: getPaginationRowsLS(),
    countPage: 1,
    pagePagination: 1,
    loadingLine: 'idle' as LoadingLineType,
    message: {
        message: null as null | string,
        color: '' as 'error' | 'success'
    },
    loadingCard: false,
    loadingProduct: false
}


export type SettingsStateType = typeof initialState

export const settingsReducer = (state: SettingsStateType = initialState, action: SettingsActionType): SettingsStateType => {
    switch (action.type) {
        case "SETTINGS/SET-THEME": {
            return {...state, theme: action.value}
        }

        case "SETTINGS/SET-PAGINATION-ROWS": {
            return {...state, paginationRows: action.rows}
        }

        case "SETTINGS/SET-COUNT-PAGE": {
            return {...state, countPage: action.countPage}
        }

        case "SETTINGS/SET-PAGINATION-PAGE": {
            return {...state, pagePagination: action.pagePagination}
        }

        case "SETTINGS/SET-LOADING-LINE": {
            return {...state, loadingLine: action.value}
        }

        case "SETTINGS/SET-ERROR-MESSAGE": {
            return {...state, message: {message: action.message, color: action.color}}
        }

        case "SETTINGS/SET-LOADING-CARD": {
            return {...state, loadingCard: action.value}
        }

        case "SETTINGS/SET-LOADING-PRODUCT": {
            return {...state, loadingProduct: action.value}
        }

        default:
            return state
    }
}

export const setThemeValueAC = (value: boolean) => ({type: 'SETTINGS/SET-THEME', value} as const)
export const setPaginationRowsAC = (rows: number) => ({type: 'SETTINGS/SET-PAGINATION-ROWS', rows} as const)
export const setCountPageAC = (countPage: number) => ({type: 'SETTINGS/SET-COUNT-PAGE', countPage} as const)
export const setPagePaginationAC = (pagePagination: number) => ({
    type: 'SETTINGS/SET-PAGINATION-PAGE',
    pagePagination
} as const)

export const setLoadingLineAC = (value: LoadingLineType) => ({type: 'SETTINGS/SET-LOADING-LINE', value} as const)
export const setMessageSnackbarAC = (message: string | null, color: 'error' | 'success') => ({
    type: 'SETTINGS/SET-ERROR-MESSAGE',
    message,
    color
} as const)

export const setLoadingCardAC = (value: boolean) => ({type: 'SETTINGS/SET-LOADING-CARD', value} as const)
export const setLoadingProductAC = (value: boolean) => ({type: 'SETTINGS/SET-LOADING-PRODUCT', value} as const)


export type SetAppStatusACType = ReturnType<typeof setThemeValueAC>
export type SetPaginationRowsACType = ReturnType<typeof setPaginationRowsAC>
export type SetCountPageACType = ReturnType<typeof setCountPageAC>
export type SetPagePaginationACType = ReturnType<typeof setPagePaginationAC>
export type SetLoadingLineACType = ReturnType<typeof setLoadingLineAC>
export type setMessageSnackbarACType = ReturnType<typeof setMessageSnackbarAC>
export type SetLoadingCardACType = ReturnType<typeof setLoadingCardAC>
export type SetLoadingProductACType = ReturnType<typeof setLoadingProductAC>


export type SettingsActionType =
    | SetAppStatusACType
    | SetPaginationRowsACType
    | SetCountPageACType
    | SetPagePaginationACType
    | SetLoadingLineACType
    | setMessageSnackbarACType
    | SetLoadingCardACType
    | SetLoadingProductACType
