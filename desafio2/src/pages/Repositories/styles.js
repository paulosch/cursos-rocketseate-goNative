import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: metrics.basePadding * 2,
  },

  separetor: {
    marginVertical: metrics.baseMargin * 2,
    backgroundColor: colors.success,
    width: '100%',
    height: 1,
  },
})

export default styles
