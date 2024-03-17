import {getLoginUser} from "../../utils/getLoginUser";
import {getRegisteredUser} from "../../utils/getRegisteredUser";

export type LoginUserType = {
    id: string
    email: string
    password: string
    confirmPassword: string
    rememberMe: boolean
}

const initialState = {
    loginUsersList: getLoginUser() as LoginUserType[],
    registeredUser: getRegisteredUser(),
    logoutValue: true
}


export type LoginStateType = typeof initialState

export const loginReducer = (state: LoginStateType = initialState, action: LoginActionType): LoginStateType => {
    switch (action.type) {
        case "LOGIN/ADD-USER": {
            return {
                ...state,
                loginUsersList: [...state.loginUsersList, action.user]
            }
        }

        case "LOGIN/REGISTERED-USER": {
            return {...state, registeredUser: action.regUser}
        }

        case "LOGIN/LOGOUT-USER": {
            return {...state, logoutValue: action.value}
        }


        default:
            return state
    }
}

export const loginAddAC = (user: LoginUserType) => ({type: 'LOGIN/ADD-USER', user} as const)
export const registeredUserAC = (regUser: string) => ({type: 'LOGIN/REGISTERED-USER', regUser} as const)
export const setLogoutValueAC = (value: boolean) => ({type: 'LOGIN/LOGOUT-USER', value} as const)


export type LoginAddACType = ReturnType<typeof loginAddAC>
export type RegisteredUserACType = ReturnType<typeof registeredUserAC>
export type SetLogoutValueACType = ReturnType<typeof setLogoutValueAC>


export type LoginActionType =
    | LoginAddACType
    | RegisteredUserACType
    | SetLogoutValueACType

