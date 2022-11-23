import { StatusBar } from 'react-native';
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
  span: {width: '100%'},
  containerStyle: {
    backgroundColor: 'white',
    padding: 20,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 38,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
});

export const Footer = styled.View`
position: absolute;
width:  100%;
height: 92px;
align-items: center;
justify-content: center;
padding: 22px;
left: 0px;
bottom: 0px;
background: #FFFFFF;
box-shadow: 0px -5px 20px rgba(0, 0, 0, 0.07);
border-radius: 34px 34px 0px 0px;`

export const NavBar = styled.View`
width: 100px;
height: 4px;
position: absolute;
bottom: 0px;
background: #0EB177;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`

export default styles;
