import axios from 'axios';
import {
    LOGIN_ADMIN,
    REGISTER_ADMIN,
    AUTH_ADMIN,
    LOGOUT_ADMIN,
    GET_ADMINS,
} from './types';

import { ADMIN_SERVER } from '../components/utils/misc';

export function getAdmins() {
    const request = axios.get(`${ADMIN_SERVER}/user-admin`)
                .then(response => response.data );

    return {
        type: GET_ADMINS,
        payload: request
    }
}

export function registerAdmin(dataToSubmit){
    const request = axios.post(`${ADMIN_SERVER}/register`,dataToSubmit)
        .then(response => response.data);

    return {
        type: REGISTER_ADMIN,
        payload: request
    }
}

export function loginAdmin(dataToSubmit){
    const request = axios.post(`${ADMIN_SERVER}/login`,dataToSubmit)
        .then(response => response.data);

    return {
        type: LOGIN_ADMIN,
        payload: request
    }
}

export function authAdmin() {
    const request = axios.get(`${ADMIN_SERVER}/auth`)
        .then(response => response.data);

    return {
        type: AUTH_ADMIN,
        payload: request
    }
}

export function logoutAdmin() {
    const request = axios.get(`${ADMIN_SERVER}/logout`)
        .then(response => response.data);

    return {
        type: LOGOUT_ADMIN,
        payload: request
    }
}