import axios from 'axios';
import {
    GET_PRODUCTS_BY_SELL,
    GET_PRODUCTS_BY_ARRIVAL,
    GET_BRANDS, 
    ADD_BRAND,
    UPDATE_BRAND, 
    DELETE_BRAND,
    GET_GENDER, 
    ADD_GENDER,
    UPDATE_GENDER,
    DELETE_GENDER, 
    GET_SECTION, 
    ADD_SECTION, 
    UPDATE_SECTION,
    DELETE_SECTION,
    GET_CATEGORY, 
    ADD_CATEGORY,
    UPDATE_CATEGORY,
    DELETE_CATEGORY, 
    GET_PRODUCTS_TO_SHOP, 
    GET_PRODUCTS,
    ADD_PRODUCT, 
    UPDATE_PRODUCT,
    DELETE_PRODUCT,
    CLEAR_PRODUCT, 
    GET_PRODUCT_DETAIL, 
    CLEAR_PRODUCT_DETAIL,
    
} from './types';

import { PRODUCT_SERVER } from '../components/utils/misc';

////////////////////////////////////
//////        PRODUCT
////////////////////////////////////

export function getProducts() {
    const request = axios.get(`${PRODUCT_SERVER}/product-list`)
                .then(response => response.data );

    return {
        type: GET_PRODUCTS,
        payload: request
    }
}

export function getProductDetail(id) {
    const request = axios.get(`${PRODUCT_SERVER}/articles_by_id?id=${id}&type=single`)
        .then(response => {
            return response.data[0]
        });
    
    return {
        type: GET_PRODUCT_DETAIL,
        payload: request
    }
}

export function clearProductDetail(){
    return {
        type: CLEAR_PRODUCT_DETAIL,
        payload:''
    }
}


export function getProductsBySell(){
    //?sortBy=sold&order=desc&limit=100
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=sold&order=desc&limit=4`)
                    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_SELL,
        payload: request
    }

}

export function getProductsByArrival(){
    const request = axios.get(`${PRODUCT_SERVER}/articles?sortBy=createdAt&order=desc&limit=4`)
    .then(response => response.data);

    return {
        type: GET_PRODUCTS_BY_ARRIVAL,
        payload: request
    }
}

export function getProductsToShop(skip, limit,filters =[], previousState = []){
    const data = {
        limit,
        skip,
        filters
    }

    const request = axios.post(`${PRODUCT_SERVER}/shop`,data)
                .then(response => {
                    let newState = [
                        ...previousState,
                        ...response.data.articles
                    ];
                    return {
                        size: response.data.size,
                        articles: newState
                    }
                });

    return {
        type: GET_PRODUCTS_TO_SHOP,
        payload: request
    }

}

export function addProduct(datatoSubmit){

    const request = axios.post(`${PRODUCT_SERVER}/article`,datatoSubmit)
                    .then(response => response.data);

    return {
        type: ADD_PRODUCT,
        payload: request
    }
}

export function clearProduct(){
    return {
        type: CLEAR_PRODUCT,
        payload: ''
    }
}

export function updateProduct(dataToSubmit, existingProducts) {
    const request = axios.post(`${PRODUCT_SERVER}/article-update`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_PRODUCT,
        payload: request
    }    
}

export function deleteProduct(dataToSubmit) {
    const  request = axios.post(`${PRODUCT_SERVER}/article-delete`, dataToSubmit)
        .then(response => response.data);

    return {
        type: DELETE_PRODUCT,
        payload: request
    }  
}


////////////////////////////////////
//////        BRAND
////////////////////////////////////


export function getBrands(){
    const request = axios.get(`${PRODUCT_SERVER}/brands`)
                .then(response => response.data );

    return {
        type: GET_BRANDS,
        payload: request
    }

}

export function addBrand(dataToSubmit, existingBrands){
    const request = axios.post(`${PRODUCT_SERVER}/brand`,dataToSubmit)
    .then(response=>{
        let brands = [
            ...existingBrands,
            response.data.brand
        ];
        return {
            success: response.data.success,
            brands
        }
    });
    return {
        type: ADD_BRAND,
        payload: request
    }
}

export function updateBrand(dataToSubmit, existingBrands) {
    const request = axios.post(`${PRODUCT_SERVER}/brand-update`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_BRAND,
        payload: request
    }    
}

export function deleteBrand(dataToSubmit) {
    const  request = axios.post(`${PRODUCT_SERVER}/brand-delete`, dataToSubmit)
        .then(response => response.data);

    return {
        type: DELETE_BRAND,
        payload: request
    }  
}


////////////////////////////////////
//////        GENDER
////////////////////////////////////

export function getGenders() {
    const request = axios.get(`${PRODUCT_SERVER}/genders`)
        .then(response => response.data);

    return {
        type: GET_GENDER,
        payload: request
    }
}

export function addGender(dataToSubmit, existingGenders) {
    const request = axios.post(`${PRODUCT_SERVER}/gender`, dataToSubmit)
        .then(response => {
            let genders = [
                ...existingGenders,
                response.data.gender
            ];
            return {
                success: response.data.success,
                genders
            }
        });
    
    return {
        type: ADD_GENDER,
        payload: request
    }
}

export function updateGender(dataToSubmit, existingGenders) {
    const request = axios.post(`${PRODUCT_SERVER}/gender-update`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_GENDER,
        payload: request
    }    
}

export function deleteGender(dataToSubmit) {
    const  request = axios.post(`${PRODUCT_SERVER}/gender-delete`, dataToSubmit)
        .then(response => response.data);

    return {
        type: DELETE_GENDER,
        payload: request
    }  
}

////////////////////////////////////
//////        SECTION
////////////////////////////////////

export function getSections() {
    const request = axios.get(`${PRODUCT_SERVER}/sections`)
        .then(response => response.data);

    return {
        type: GET_SECTION,
        payload: request
    }
}

export function addSection(dataToSubmit, existingSections) {
    const request = axios.post(`${PRODUCT_SERVER}/section`, dataToSubmit)
        .then(response => {
            let sections = [
                ...existingSections,
                response.data.section
            ];
            return {
                success: response.data.success,
                sections
            }
        });
    
    return {
        type: ADD_SECTION,
        payload: request
    }
}

export function updateSection(dataToSubmit, existingSections) {
    const request = axios.post(`${PRODUCT_SERVER}/section-update`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_SECTION,
        payload: request
    }    
}

export function deleteSection(dataToSubmit) {
    const  request = axios.post(`${PRODUCT_SERVER}/section-delete`, dataToSubmit)
        .then(response => response.data);

    return {
        type: DELETE_SECTION,
        payload: request
    }  
}


////////////////////////////////////
//////        CATEGORIES
////////////////////////////////////

export function getCategories() {
    const request = axios.get(`${PRODUCT_SERVER}/categories`)
        .then(response => response.data);

    return {
        type: GET_CATEGORY,
        payload: request
    }
}

export function addCategory(dataToSubmit, existingCategories) {
    const request = axios.post(`${PRODUCT_SERVER}/category`, dataToSubmit)
        .then(response => {
            let categories = [
                ...existingCategories,
                response.data.category
            ];
            return {
                success: response.data.success,
                categories
            }
        });
    
    return {
        type: ADD_CATEGORY,
        payload: request
    }
}

export function updateCategory(dataToSubmit, existingCategory) {
    const request = axios.post(`${PRODUCT_SERVER}/category-update`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_CATEGORY,
        payload: request
    }    
}

export function deleteCategory(dataToSubmit) {
    const  request = axios.post(`${PRODUCT_SERVER}/category-delete`, dataToSubmit)
        .then(response => response.data);

    return {
        type: DELETE_CATEGORY,
        payload: request
    }  
}