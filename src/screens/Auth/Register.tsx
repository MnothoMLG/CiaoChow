import React, {} from 'react';
import {View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppButton, Margin, Input, Text, Padding, AuthHeader } from '../../components';
import { registerValidationSchema } from '../../util/Validation';
import { Formik } from 'formik';
import strings from '../../constants/strings';
import { colors } from '../../theme';
import AuthForm from './Form';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';


const Register = () => {

  return (
    <AuthForm register 
    submit={(values) => {console.log({values})}} />
  );
};

export default Register;
