import {ListStoreType} from "../../api/store-api";
import {getProductLS} from "../../utils/localStorage/getProductLS";


const initialState = {
    product: getProductLS() as ListStoreType
}

export type ProductsStateType = typeof initialState

export const productsReducer = (state = initialState, action: ProductActionType): ProductsStateType => {
    switch (action.type) {
        case "PRODUCTS/GET-ITEMS": {
           return  {...state, product: action.product}
        }

        default:
            return state
    }
}

export const getProductsItemAC = (product: ListStoreType) => ({type: 'PRODUCTS/GET-ITEMS', product} as const)


export type getProductsItemACType = ReturnType<typeof getProductsItemAC>


export type ProductActionType = getProductsItemACType
