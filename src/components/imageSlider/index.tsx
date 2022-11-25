import React, { FC } from 'react';
import { View, FlatList, NativeSyntheticEvent, Text, NativeScrollEvent, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Row } from '..';
import styles from './Styles';
import { colors } from '../../theme';

const ImageSlider: FC<{
  urls?: string[];
  style: ViewStyle;
}> = ({ urls, style }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / totalWidth);
    setCurrentIndex(current);
  };

  const Carousel = (
    <FlatList
      data={urls}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      pagingEnabled
      onScroll={onScroll}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => <Image resizeMode="cover" source={{ uri: item }} style={styles.IMG_CONTAINER} />}
    />
  );

  const Pagination = (
    <Row justify="center" >
      {urls?.map((_, index) => (
        <View key={index} style={[styles.PAGINATION_DOT, currentIndex === index ? styles.PAGINATION_DOT_SELECTED : {}]} />
      ))}
    </Row>
  );

  return (
    <View style={style}>
      {Carousel}

      <LinearGradient
        // Background Linear Gradient
        style={styles.PAGINATION} 
        start={{x : 0, y: 1}}
        end={{x:0, y:0}}
        colors={[colors.background.dark, 'transparent']}

      >
              {Pagination}

      </LinearGradient>

    </View>
  );
};

export default ImageSlider;
