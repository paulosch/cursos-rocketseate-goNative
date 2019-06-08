import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../../styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginVertical: metrics.baseMargin,
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  centerContainer: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: metrics.baseMargin,
  },

  name: {
    fontSize: 18,
  },

  login: {
    fontSize: 14,
    color: colors.regular,
  },

  icon: {
    width: 20,
    color: colors.ligth,
    fontWeight: '100',
  },
})

export default styles
