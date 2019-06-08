import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export default {
  baseMargin: 10,
  basePadding: 10,
  baseRadius: 3,

  screenWidth: width < height ? width : height,
  screenHeigth: width < height ? height : width,
}
