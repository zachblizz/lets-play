import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const layoutWidth = width - 25;

export default {
  window: {
    width,
    height,
    layoutWidth
  },
  isSmallDevice: width < 375,
};
