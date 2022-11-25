import React, { FC } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Padding, Row, Margin, Text } from '..';
import { closeAlert } from '../../store/alert/actions';
import { getAlertState } from '../../store/alert/selectors';
import { colors } from '../../theme';
import { AppButton } from '../appButton';

export const AlertPopUp: FC = () => {
  const { title, message, visible, right, left } = useSelector(getAlertState);
  const dispatch = useDispatch();
  const close = () => dispatch(closeAlert());

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <Padding pr={24} pb={24} pt={24} pl={24} style={styles.dialog}>
          <Text color={colors.background.dark} xtraBold size={21} lh={24}>
            {title}
          </Text>

          <Text color={colors.typography.body} mb={24} mt={36}>
            {message}
          </Text>
          <Row justify="flex-end">
            {left && (
              <AppButton
                {...left}
                textSize={14}
                onPress={() => {
                  close();
                  left.onPress && left.onPress();
                }}
                variant="clear"
                style={styles.button}
              />
            )}
            <Margin mr={8} />
            {right && (
              <AppButton
                {...right}
                textSize={14}
                onPress={() => {
                  close();
                  right.onPress && right.onPress();
                }}
                style={styles.button}
              />
            )}
          </Row>
        </Padding>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: { height: 40, paddingHorizontal: 12, paddingVertical: 10 },
  overlay: {
    flex: 1,
    backgroundColor: `${colors.background.dark}D6`,
    width: '100%',
    height: '100%',
    paddingTop: '50%',
    paddingHorizontal: 24,
  },
  dialog: { backgroundColor: colors.typography.static, width: '100%', borderRadius: 5 },
});
