import axios from "axios";

const instance = axios.create({
    baseURL: 'https://dummyjson.com/products',
})

export const storeApi = {
    getStore(paginationRows: number, paginationPage: number) {
        return instance.get('', {
            params: {
                skip: paginationRows * (paginationPage - 1),
                limit: paginationRows
            }
        })
    }
}


export type ListStoreType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

