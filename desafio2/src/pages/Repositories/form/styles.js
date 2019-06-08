import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../../styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: metrics.baseMargin * 2,
  },

  input: {
    borderRadius: metrics.baseRadius,
    backgroundColor: colors.white,
    height: 44,
    paddingHorizontal: metrics.basePadding,
    flex: 1,
  },

  button: {
    height: 44,
    marginLeft: metrics.baseMargin * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  error: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    color: colors.danger,
  },
})

export default styles
