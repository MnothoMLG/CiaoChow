import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles, { Footer } from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetachAllRequest} from '../../store/data/actions';
import {getDataState, getPostsSelector} from '../../store/data/selectors';
import { AppButton , Text, ImageSlider } from '../../components';
import { TabView, SceneMap } from 'react-native-tab-view';
import { colors } from '../../theme';


const Home = () => {
  const posts = useSelector(getPostsSelector);
  const {sort} = useSelector(getDataState);
  const dispatch = useDispatch();
  const [showSort, setShowSort] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const url = 'https://images.unsplash.com/photo-1597429554033-86c7f86d0cbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTE0ODI5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900'

  const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.container} >

      <ImageSlider style={{position: 'absolute', top: 0, height: 371}} urls={[url,url,url]} />
      <View style={{borderTopLeftRadius: 32, borderTopRightRadius: 32 , flex: 1, width: '100%', backgroundColor : colors.typography.static}}>

        <Text color={colors.background.dark} ml={21} mt={31}>
          Hamburger
        </Text>
        <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      // initialLayout={{ width:  }}
    />
      </View>
      <Footer >
          <AppButton rounded fullWidth label="Nah! Find Something else" />
        </Footer>
    </View>
  );
};

export default Home;
