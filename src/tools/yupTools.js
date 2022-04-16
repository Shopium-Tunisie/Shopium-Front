/* eslint-disable prettier/prettier */
import * as yup from 'yup';

// sign up
export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required().min(3),
  lastName: yup
    .string()
    .required()
    .min(3, 'lastName should at least contain 3 letters'),
  country: yup.string().required().min(3, 'country should at least 3 letters'),
  city: yup.string().required(),
  email: yup.string().required().label('Email').email('enter a valid email'),
  password: yup
    .string()
    .required()
    .label('Password')
    .min(8, 'Password not secure...'),
  passwordConfirmation: yup.string().required().label('Password Confirmation'),
});

export const signUpFormInitalValues = {
  name: '',
  lastName: '',
  country: '',
  city: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

// Sign in
export const signInValidationSchema = yup.object().shape({
  email: yup.string().email().required(),

  password: yup
    .string()
    .required()
    .label('Password')
    .min(2, 'Password not secure...'),
});

export const signInInitialValues = {
  email: '',
  password: '',
};

// Personal Info
export const personalInfoValidationSchema = yup.object().shape({
  firstName: yup.string().required().min(3),
  lastName: yup.string().required().min(3, 'too short'),
  country: yup.string().required().min(3, 'country should at least 3 letters'),
  city: yup.string().required(),
  email: yup.string().required().label('Email').email('enter a valid email'),
});

export const personalInfoFormInitalValues = {
  firstName: '',
  lastName: '',
  country: '',
  city: '',
  email: '',
};
