import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles, { Footer } from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {fetachAllRequest} from '../../store/data/actions';
import {getDataState, getPostsSelector} from '../../store/data/selectors';
import ImageSlider from '../../components/imageSlider';

const Home = () => {
  const posts = useSelector(getPostsSelector);
  const {sort} = useSelector(getDataState);
  const dispatch = useDispatch();
  const [showSort, setShowSort] = useState(false);

  useEffect(() => {
    dispatch(fetachAllRequest({sort}));
  }, []);

  const url = 'https://images.unsplash.com/photo-1597429554033-86c7f86d0cbe?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2OTE0ODI5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900'
  return (
    <View style={styles.container} >

      <ImageSlider style={{position: 'absolute', top: 0, height: 371}} urls={[url,url,url]} />
      <View style={{borderTopLeftRadius: 32, borderTopRightRadius: 32 , flex: 1, width: '100%', backgroundColor : 'red'}}>
      </View>
      <Footer />
    </View>
  );
};

export default Home;
