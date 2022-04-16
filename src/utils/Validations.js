/* eslint-disable prettier/prettier */
import Validator from 'is_js';

const checkEmpty = (val, key) => {
  if (Validator.empty(val.trim())) {
    return `${key}`;
  } else {
    return '';
  }
};

const checkMinLength = (val, minLength ,key) => {
  if (val.trim().length < minLength) {
    return ` Please Enter Valid ${key}`;
  } else {
    return '';
  }
};

export default function (data){
    const {email,password} = data;
    if (email !== undefined){
        let emptyValidationText = checkEmpty(email,'Please enter your email');
        if (emptyValidationText !== ''){
            return emptyValidationText;
        } else {
            if (!Validator.email(email)){
                return 'Please enter valid email';
            }
        }
    }
      if (password !== undefined){
        let emptyValidationText = checkEmpty(password,'Please enter your password');
        if (emptyValidationText !== ''){
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password,8,'password');
            if (minLengthValidation !== ''){
                return minLengthValidation;
            }
        }
    }
}
