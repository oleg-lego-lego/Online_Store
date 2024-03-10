import {getThemeLS} from "../../utils/getThemeLS";

const initialState = {
    theme: getThemeLS()
}


export type SettingsStateType = typeof initialState

export const settingsReducer = (state: SettingsStateType = initialState, action: SettingsActionType): SettingsStateType => {
    switch (action.type) {
        case "SETTINGS/SET-THEME": {
            return {...state, theme: action.value}
        }

        default:
            return state
    }
}

export const setThemeValueAC = (value: boolean) => ({type: 'SETTINGS/SET-THEME', value} as const)


export type SetAppStatusACType = ReturnType<typeof setThemeValueAC>


export type SettingsActionType = SetAppStatusACType
