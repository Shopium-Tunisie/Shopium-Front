/* eslint-disable prettier/prettier */
import {showMessage} from 'react-native-flash-message';

const showError = (message) => {
  showMessage({type: 'danger', icon: 'danger', message,position:'top',backgroundColor:'red'});
};
const showSuccess = (message) => {
  showMessage({type: 'success', icon: 'success', message, position:'top', backgroundColor:'green'});
};
export {
    showError,
    showSuccess,
};


import {DeviceEventEmitter} from 'react-native';
import { SHOW_TOAST_MESSAGE } from './toast';

const toast = {
  info: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'info'});
  },
  success: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'success'});
  },
  danger: options => {
    DeviceEventEmitter.emit(SHOW_TOAST_MESSAGE, {...options, type: 'danger'});
  },
};

export default toast;