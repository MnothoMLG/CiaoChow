import React, { FC } from 'react';
import {View} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AppButton, Margin, Input, Text, Padding, AuthHeader } from '../../components';
import { loginValidationSchema, registerValidationSchema } from '../../util/Validation';
import styles from './styles';
import { Formik, FormikValues } from 'formik';
import strings from '../../constants/strings';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';

interface Props {
    register?: boolean;
    submit: (values: FormikValues) => void;
}

const AuthForm : FC<Props> = ({register, submit }) => {
    const {navigate} = useNavigation()
    const title = register ? strings.auth.register : strings.auth.login
  return (

    <Formik
      enableReinitialize
      initialValues={{
        email: "Mnotho.mlg@gmail.com",
        username: "",
        password: "Mnotho123",
      }}
      onSubmit={() => {
        return;
      }}
      validationSchema={register? registerValidationSchema : loginValidationSchema}
    >
      {({
        handleChange,
        setFieldTouched,
        errors,
        isValid,
        values,
      }) => (
      <KeyboardAwareScrollView>
      <View style={styles.container} >
      <AuthHeader register={register} />

      <Padding pl={20} pr={20} style={{flex: 1, width: '100%', alignItems: 'center'}}>

        {register && <Input onChangeText={handleChange('username')} onFocus={()=> setFieldTouched('username')}  error={errors.username} value={values.username} label={"username"} placeholder={"muncher"}  />}

        <Input onChangeText={handleChange('email')} onFocus={()=> setFieldTouched('email')} error={errors.email} value={values.email} label={"email"}  placeholder="yourmail@mail.com"  />

        <Input onChangeText={handleChange('password')} onFocus={()=> setFieldTouched('password')}  error={errors.password} value={values.password}  secureTextEntry  label={"password"}  placeholder={"your password"} />
        <Margin mt={8} />
        <AppButton disabled={!isValid} onPress={()=> submit(values)} rounded  fullWidth label={title} />

        <Text mt={24} onPress={()=> navigate(register? routes.LOGIN : routes.REGISTER)} color={colors.background.primary} > 
          {register ? strings.auth.haveAnAccount : strings.auth.noAccount}
          <Text bold color={colors.background.primary} > 
          {` ${ register ? strings.auth.login : strings.auth.register}`}
          </Text>
        </Text>
      </Padding>
      </View>
      </KeyboardAwareScrollView>
      )}
    </Formik>

  );
};

export default AuthForm;
