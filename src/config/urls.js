/* eslint-disable prettier/prettier */
export const API_BASE_URL = 'http://192.168.43.145:8000';
export const getApiUrl = endpoint => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl('/signin');
export const SIGNUP = getApiUrl('/signup');
