/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {useState} from 'react';
import {TextInput, Text, View, TextInputProps, TouchableOpacity} from 'react-native';
import styles, {InputLabel} from './Styles';
import { Margin } from '../layout/layout';
import { EyeInvisible, EyeVisible } from '../../assets';

interface IProps extends TextInputProps {
  style?: Record<string, unknown> | Record<string, unknown>[];
  value: string;
  error?: string;
  label?: string;
  required?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText?: (v: string) => void;
}

const Input = ({
  style = {},
  label,
  secureTextEntry,
  required,
  error,
  ...props
}: IProps) => {
  const textChanged = (text: string): void => {
    props.onChangeText && props.onChangeText(text);
  };
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <>
      {label && (
        <InputLabel>
          {label.toLowerCase()}
        </InputLabel>
      )}
      <View style={[styles.container, style, focused && styles.brightBorder]}>
        <TextInput
          {...props}
          placeholderTextColor={'rgba(0,0,0,0.3)'}
          style={[styles.input]}
          secureTextEntry={secureTextEntry && !visible}
          placeholder={props.placeholder || ''}
          value={props.value}
          onChangeText={textChanged}
          onFocus={() => {
            setFocused(true);
            props.onFocus && props.onFocus();
          }}
          onBlur={() => {
            setFocused(false);
            setTouched(true);
            props.onBlur && props.onBlur();
          }}
        />

        {secureTextEntry && <TouchableOpacity onPress={()=> setVisible(old => !old)} style={styles.eye} >
        {visible ? <EyeVisible /> : <EyeInvisible /> }
        </TouchableOpacity>}
      </View>
      {error && touched && <Text style={styles.error}>{error}</Text>}
      <Margin mb={14} />
    </>
  );
};
export default Input;
