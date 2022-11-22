import React, {} from 'react';
import AuthForm from './Form';

const Login = () => {

  return (
    <AuthForm 
     submit={(values) => {console.log( "logging in" ,{ values})}} />
  );
};

export default Login;
