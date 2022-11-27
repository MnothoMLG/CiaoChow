import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../theme';

export const InputLabel = styled.Text`
  color:${colors.background.dark};
  font-size: 14px;
  align-self: flex-start;
  font-weight: 500;
  margin-bottom: 8px;
`;

export default StyleSheet.create({
  container: {
    height: 52,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 14,
    backgroundColor: colors.typography.border,
  },
  brightBorder: {
    borderColor: colors.background.secondary,
  },
  eye: {width: 30, height: 30 , alignItems: 'center', justifyContent: "center" },
  input: {
    height: 46,
    flex: 1,
    fontSize: 12,
    color: '#00000080',
  },
  error: {
    alignSelf: 'flex-start',
    fontSize: 10,
    marginTop: 4,
    color: 'red',
  },
});
