import { StyleSheet } from 'react-native'

import { colors, metrics } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },

  error: {
    marginVertical: metrics.baseMargin * 2,
    color: colors.danger,
  },

  loading: {
    marginVertical: metrics.baseMargin * 2,
  },
})

export default styles
