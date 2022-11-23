import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import styles, { Footer, NavBar } from './styles';
import { AppButton , Text, ImageSlider, Padding } from '../../components';
import { TabView, SceneMap } from 'react-native-tab-view';
import { colors } from '../../theme';

const Home = () => {
  const [] = useState(false);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Description' },
    { key: 'second', title: 'Nutrition facts' },
  ]);

  const url = 'https://images.unsplash.com/photo-1597429554033-86c7f86d0cbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTE0ODI5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900'

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
    first: () => <RenderInfo text={placeholder}  />,
    second: () => <RenderInfo text={placeholder} />,
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
      <ImageSlider style={{position: 'absolute', top: 0, height: 371}} urls={[url,url,url]} />
      <View style={{borderTopLeftRadius: 32, borderTopRightRadius: 32 , flex: 1, width: '100%', backgroundColor : colors.typography.static}}>
        <Text color={colors.background.dark} ml={21} mt={31}>
          Hamburger
        </Text>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={_renderTabBar}
        />
      </View>
      <Footer >
          <AppButton rounded fullWidth label="Nah! Find Something else" />
        </Footer>
    </View>
  );
};

export default Home;



const placeholder = `A hamburger (or burger for short) is a food, which in American English is considered a sandwich consisting of one or more cooked patties—usually ground meat, typically beef—placed inside a sliced bread roll or bun.

The patty may be pan fried, grilled, smoked or flame broiled. Hamburgers are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis; condiments such as ketchup, mustard, mayonnaise, relish, or a "special sauce", often a variation of Thousand Island dressing; and are frequently placed on sesame seed buns. `