import {StyleSheet} from 'react-native';
import styled from 'styled-components/native'
import {colors} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 341,
    alignItems: 'center',
    backgroundColor: colors.typography.static,
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  span: {width: '100%'},
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
});

export const Footer = styled.View`
position: absolute;
width:  100%;
height: 92px;
left: 0px;
bottom: 0px;
background: #FFFFFF;
box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.07);
border-radius: 34px 34px 0px 0px;`

export default styles;
