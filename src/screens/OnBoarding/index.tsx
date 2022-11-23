import React, { useDebugValue } from 'react';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';
import { Gent, Lady, LogoIcon } from '../../assets';
import {Text, Image, Row, AppButton, Padding, Margin} from '../../components'
import { setOnBoarding } from '../../store/auth/actions';
import { colors } from '../../theme';

const slides = [
  {
    key: 1,
    title: '1 of 3',
  },
  {
    key: 2,
    title: '2 of 3',
  },
  {
    key: 3,
    title: '3 of 3',
  }
];


 
export const AppIntro = () => {

    const dispatch = useDispatch();
    const getStated = () =>  {
        dispatch(setOnBoarding({onBoarded: true}))
    }

    const renderItem = ({ item }) => {
        
        return (
        <Padding pl={20} pr={20} style={{ flex: 1, backgroundColor:  colors.background.primary, alignItems: 'center' }}>
            <Margin mt={52} mb={52} size={17}>
                <LogoIcon />
            </Margin>
            <Row  alignHorizontal="center">
                <Lady/>
                <Gent />
            </Row>
            <Padding pt={68} pb={50} pl={75} pr={75}>
                <Text mb={8} align="center" >{item.title}</Text>
                <Text size={18} align="center">Hungry? <Text size={18} bold>CiaChow</Text> helps you find something to eat</Text>
            </Padding>
            {item.key > 2 && <AppButton onPress={()=> getStated()} fullWidth rounded variant="light" label="Get Started" />}
        </Padding>
        );
    }

    return <AppIntroSlider  renderNextButton={()=> null} renderDoneButton={()=> null} renderItem={renderItem} data={slides} />;

}