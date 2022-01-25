import * as Yup from 'yup';

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('Name is Required').matches(/^[A-Za-z ]*$/, 'Name must contain only letters'),
  surname: Yup.string().required('Surname is Required').matches(/^[A-Za-z ]*$/, 'Surname must contain only letters'),
  email: Yup.string()
  .required('Email is Required')
  .email('Email entered incorrectly'),
  password: Yup.string()
    .required('Password is Required')
    .matches(/(?=.*[A-Z])/, 'Password must contain at least one capital letter')
    .matches(/(?=.*[0-9])/, 'Password must contain at least one number')
    .min(6, 'Password must be at least 6 characters long')
    .max(40, 'Maximum usage duration 40 characters'),
})