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
    CLEAR_PRODUCT_DETAIL
} from '../actions/types';
 

export default function(state={},action){
    switch(action.type){
        case GET_PRODUCTS_BY_SELL:
            return {...state, bySell: action.payload }
        case GET_PRODUCTS_BY_ARRIVAL:
            return {...state, byArrival:  action.payload }
        case GET_BRANDS:
            return {...state, brands: action.payload }
        case ADD_BRAND:
            return {
                ...state, 
                addBrand: action.payload.success, 
                brands:action.payload.brands 
            }
        case UPDATE_BRAND:
            return {
                ...state,
                brands: action.payload.brands
            }
        case DELETE_BRAND:
            return {...state, brands: action.payload }
        case GET_GENDER:
            return {...state, gender: action.payload }
        case ADD_GENDER:
            return {
                ...state, 
                addGender: action.payload.success , 
                genders:action.payload.genders 
            }
        case UPDATE_GENDER:
            return {
                ...state,
                genders:action.payload.genders 
            }
        case DELETE_GENDER:
            return {...state, gender: action.payload } 
        case GET_SECTION:
            return {...state, section: action.payload }
        case ADD_SECTION:
            return {
                ...state, 
                addSection: action.payload.success , 
                sections:action.payload.sections 
            }
        case UPDATE_SECTION:
            return {
                ...state,
                sections:action.payload.sections 
            }
        case DELETE_SECTION:
            return {...state, section: action.payload } 
        case GET_CATEGORY:
            return {...state, category: action.payload }
        case ADD_CATEGORY:
            return {
                ...state, 
                addCategory: action.payload.success , 
                categories:action.payload.categories 
            }         
        case UPDATE_CATEGORY:
            return {
                ...state,
                categories:action.payload.categories 
            }
        case DELETE_CATEGORY:
            return {...state, categories: action.payload }    
        case GET_PRODUCTS_TO_SHOP:
            return {
                ...state,
                toShop: action.payload.articles,
                toShopSize: action.payload.size
            }
        case GET_PRODUCTS:
            return {...state, productList: action.payload }
        case ADD_PRODUCT:
            return { ...state,addProduct: action.payload }
        case UPDATE_PRODUCT:
            return {
                ...state,
                alterProduct: action.payload
            }
        case DELETE_PRODUCT:
            return {...state, deleteProduct: action.payload }    
        case CLEAR_PRODUCT:
            return { ...state,addProduct: action.payload }
        case GET_PRODUCT_DETAIL:
            return {...state, prodDetail: action.payload }
        case CLEAR_PRODUCT_DETAIL:
            return {...state, prodDetail: action.payload }
        default:
            return state;
    }
}