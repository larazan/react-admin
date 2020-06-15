import {
    LOGIN_ADMIN,
    REGISTER_ADMIN,
    AUTH_ADMIN,
    LOGOUT_ADMIN,
    GET_ADMINS,
} from '../actions/types';

export default function(state={}, action){
    switch (action.type) {
        case GET_ADMINS:
            return {...state, adminList: action.payload }
        case REGISTER_ADMIN:
            return {...state, registerAdmin: action.payload }
        case LOGIN_ADMIN:
            return { ...state, loginAdminSucces: action.payload }
        case AUTH_ADMIN:
            return {...state, adminData: action.payload }
        case LOGOUT_ADMIN:
            return {...state }
        default:
            return state;
    }
}