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
    flexDirection: 'row',
    height: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 36,
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
    width: 16,
  },
});

export default styles;
