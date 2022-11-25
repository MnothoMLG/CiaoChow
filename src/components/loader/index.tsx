import styles from './styles';
import {useLoading} from '../../hooks/useLoadingHook';
import {ActivityIndicator} from 'react-native';
import React from 'react';
import {Modal, View} from 'react-native';
import {Margin} from '../layout/layout';
import {Text} from '..';
import strings from '../../constants/strings';
import { LOG_IN_LOADING_KEY, REGISTER_LOADING_KEY } from '../../store/auth/actions';
import { FETCH_ALL_LOADING_KEY } from '../../store/data/actions';

export function LoadingOverlay() {
  const isOpen = useLoading(REGISTER_LOADING_KEY, LOG_IN_LOADING_KEY, FETCH_ALL_LOADING_KEY);

  return (
    <Modal transparent style={styles.span} visible={isOpen}>
      <View style={styles.modal}>
        <ActivityIndicator size="large" />
        <Margin mt={40} />
        <Text>{strings.loading.wait}</Text>
      </View>
    </Modal>
  );
}
export default LoadingOverlay;
