import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Gent, Lady } from '../../assets';
import {Text, Image, Row} from '../../components'

const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    backgroundColor: '#22bcb5',
  }
];
 
export const AppIntro = () => {

    const renderItem = ({ item }) => {
        return (
        <View style={{ flex: 1 }}>
            <Text size={17}>{item.title}</Text>
            <Row>
                <Lady/>
                <Gent />
            </Row>

            <Text size={12}>{item.text}</Text>
        </View>
        );
    }

    const onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
    }

    return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone}/>;

}