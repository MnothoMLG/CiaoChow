import React, {} from 'react';
import { useDispatch } from 'react-redux';
import { logInRequest } from '../../store/auth/actions';
import AuthForm from './Form';

const Login = () => {

  const dispatch = useDispatch();
  return (
    <AuthForm 
     submit={(values) => {
      console.log( "logging in" ,{ values})
        console.log({values})
        dispatch(logInRequest({identifier: values.email, password: values.password}))
    }} />
  );
};

export default Login;
