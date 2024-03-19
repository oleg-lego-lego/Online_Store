import {ListStoreType} from "../../api/store-api";


const initialState: ListStoreType[] = []

export type StoreStateType = typeof initialState

export const storeReducer = (state = initialState, action: StoreActionType): StoreStateType => {
    switch (action.type) {
        case "STORE/GET-ITEMS": {
            return action.data.map(el => ({...el}))
        }

        default:
            return state
    }
}

export const getStoreItemsAC = (data: ListStoreType[]) => ({type: 'STORE/GET-ITEMS', data} as const)


export type getStoreACType = ReturnType<typeof getStoreItemsAC>


export type StoreActionType = getStoreACType

