import React, {} from 'react';
import {View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppButton, Margin, Input, Text, Padding, AuthHeader } from '../../components';
import { registerValidationSchema } from '../../util/Validation';
import { Formik } from 'formik';
import strings from '../../constants/strings';
import { colors } from '../../theme';
import AuthForm from './Form';
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../store/auth/actions';
import { UserDataInterface } from '../../store/auth/types';


const Register = () => {

  const dispatch = useDispatch();
  return (
    <AuthForm register 
      submit={(values) => {
        console.log({values})
        dispatch(registerRequest(values as UserDataInterface))
      }} 
    />
  );
};

export default Register;
