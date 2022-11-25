import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../theme';

const { width } = Dimensions.get('screen');
const PAGINATION_DOT_SIZE = 8;
const PAGINATION_DOT_UNSELECTED_COLOR = colors.background.inactivePrimary;

const styles = StyleSheet.create({
  IMG_CONTAINER: {
    width,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  CAROUSEL_TEXT: {
    fontSize: 40,
    fontWeight: '800',
    textAlign: 'center',
  },
  PAGINATION: {
    width,
    height: 163,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 52,
    position: 'absolute',
    bottom: 0,
  },
  PAGINATION_DOT: {
    borderRadius: PAGINATION_DOT_SIZE,
    width: PAGINATION_DOT_SIZE,
    marginRight: 4,
    height: PAGINATION_DOT_SIZE,
    backgroundColor: PAGINATION_DOT_UNSELECTED_COLOR,
  },
  PAGINATION_DOT_SELECTED: {
    backgroundColor: colors.typography.static,
    width: PAGINATION_DOT_SIZE,
  },
  gradient: {
    position: 'absolute',
    backgroundColor: "red",
    bottom: 200,
    width: '100%'
  }
});

export default styles;
