import React, {useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { AppButton , Text, ImageSlider, Padding } from '../../components';
import styles, { Footer, NavBar } from './styles';
import { generateNumber, getImageUrls } from '../../util';
import strings from '../../constants/strings';
import { colors } from '../../theme';
import { fetachAllRequest } from '../../store/data/actions';
import { getChowDataState } from '../../store/data/selectors';

const Home = () => {
  const [] = useState(false);
  const [index, setIndex] = React.useState(0);
  const {chow} = useSelector(getChowDataState);
  const [option, setOption] = useState(generateNumber(chow.length))
  const productOnView = chow[option]
  const dispatch = useDispatch();
  const [routes] = React.useState([
    { key: 'first', title: 'Description' },
    { key: 'second', title: 'Nutrition facts' },
  ]);

  const urls = getImageUrls(productOnView?.attributes?.Image?.data);

  useEffect(()=> {
      dispatch(fetachAllRequest())
  },[])

  const nextOption = () => setOption(generateNumber(chow.length))
  const RenderInfo = ({text}: {text: string}) => (
    <ScrollView>
      <Padding pl={28} pr={28} pt={38} pb={24} style={{ flex: 1}} >
        <Text size={14} color={colors.typography.body}>
            {text}
        </Text>
      </Padding>
    </ScrollView>
  );
  
  const renderScene = SceneMap({
    first: () => <RenderInfo text={productOnView?.attributes?.Description}  />,
    second: () => <RenderInfo text={productOnView?.attributes?.Description} />,
  });

  const _renderTabBar = (props) => {

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const active = index === i
          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}
              >
              <Text size={14} lh={20} color={active ? colors.background.primary : colors.background.dark}>{route.title}</Text>
              {index === i && <NavBar />}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container} >
      <ImageSlider style={styles.imageSlider} urls={urls} />
      <View style={styles.tabContainer}>
        <Text size={24} bold color={colors.background.dark} ml={21} mt={31}>
          {productOnView?.attributes?.Title}
        </Text>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={_renderTabBar}
        />
      </View>
      <Footer >
          <AppButton onPress={()=> nextOption()} rounded fullWidth label={strings.home.nah} />
        </Footer>
    </View>
  );
};

export default Home;
