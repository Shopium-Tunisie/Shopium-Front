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
