import React, { FC } from 'react';
import { View, FlatList, NativeSyntheticEvent, NativeScrollEvent, ViewStyle } from 'react-native';
import { Image } from '..';
import styles from './Styles';

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
    <View style={styles.PAGINATION}>
      {urls?.map((_, index) => (
        <View key={index} style={[styles.PAGINATION_DOT, currentIndex === index ? styles.PAGINATION_DOT_SELECTED : {}]} />
      ))}
    </View>
  );

  return (
    <View style={style}>
      {Carousel}
      {Pagination}
    </View>
  );
};

export default ImageSlider;
