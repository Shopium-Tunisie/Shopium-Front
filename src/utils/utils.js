/* eslint-disable prettier/prettier */
// /* eslint-disable prettier/prettier */
// /* eslint-disable no-unreachable */
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import store from '../Redux/store';
// import types from '../Redux/types';


// const {dispatch, getState} = store;

// export async function getHeaders() {
//   let userData = await AsyncStorage.getItem('userData');
//   if (userData) {
//     userData = JSON.parse(userData);
//     //console.log(userData.accessToken, 'header')
//     return {
//       authorization: `${userData.token}`,
//     };
//   }
//   return {};
// }

// export async function apiReq(
//   endPoint,
//   data,
//   method,
//   headers,
//   requestOptions = {},
// ) {
//   return new Promise(async (res, rej) => {
//     const getTokenHeader = await getHeaders();
//     headers = {
//       ...getTokenHeader,
//       ...headers,
//     };

//     if (method === 'get' || method === 'delete') {
//       data = {
//         ...requestOptions,
//         ...data,
//         headers,
//       };
//     }

//     axios[method](endPoint, data, {headers})
//       .then(result => {
//         const {data} = result;

//         if (data.status === false) {
//           return rej(data);
//         }

//         return res(data);
//       })
//       .catch(error => {
//         console.log(error);
//         console.log(error && error.response, 'the error response');
//         if (error && error.response && error.response.status === 401) {
//           clearUserData();
//           // NavigationService.resetNavigation();
//           //NavigationService.navigate('loginUsingEmailScreen');
//           dispatch({
//             type: types.CLEAR_REDUX_STATE,
//             payload: {},
//           });
//           dispatch({
//             type: types.NO_INTERNET,
//             payload: {internetConnection: true},
//           });
//         }
//         if (error && error.response && error.response.data) {
//           if (!error.response.data.message) {
//             return rej({
//               ...error.response.data,
//               msg: error.response.data.message || 'Network Error',
//             });
//           }
//           return rej(error.response.data);
//         } else {
//           return rej({message: 'Network Error', msg: 'Network Error'});
//         }
//         return rej(error);
//       });
//   });
// }

// export function apiPost(endPoint, data, headers = {}) {
//   return apiReq(endPoint, data, 'post', headers);
// }

// export function apiDelete(endPoint, data, headers = {}) {
//   return apiReq(endPoint, data, 'delete', headers);
// }

// export function apiGet(endPoint, data, headers = {}, requestOptions) {
//   return apiReq(endPoint, data, 'get', headers, requestOptions);
// }

// export function apiPut(endPoint, data, headers = {}) {
//   return apiReq(endPoint, data, 'put', headers);
// }

// export function setItem(key, data) {
//   data = JSON.stringify(data);
//   console.log('setitem',key)
//   return AsyncStorage.setItem(key, data);
// }

// export function getItem(key) {
//   return new Promise((resolve, reject) => {
//   const user =  AsyncStorage.getItem(key).then(data => {
//       resolve(JSON.parse(data));
//     });
//    console.log('getitem : ',user);
//   });
// }

// export function removeItem(key) {
//   console.log(key);
//   return AsyncStorage.removeItem(key);
// }
// export  const setUserData = async (data)=>  {
//   // data = JSON.stringify(data);
//   // console.log('data : ' , data);
//   // const user = await AsyncStorage.setItem('userData', data);
//   // console.log('setuserdata : ',user);
//   // return user;
// }

// export async function getUserData() {
//   return new Promise((resolve, reject) => {
//    const user =  AsyncStorage.getItem('userData').then(data => {
//       resolve(JSON.parse(data));
//     });
//     console.log('getuserdata : ',user);
//   });
// }
// export async function clearUserData() {
//   return AsyncStorage.removeItem('userData');
// }
