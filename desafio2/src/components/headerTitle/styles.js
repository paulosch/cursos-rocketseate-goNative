import { StyleSheet } from 'react-native'
import { colors } from '~/styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
})

export default styles
