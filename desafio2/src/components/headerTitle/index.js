import React from 'react'

import { View, Text, StatusBar } from 'react-native'

import styles from './styles'

const HeaderTitle = ({ title }) => (
  <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <Text style={styles.title}>{title}</Text>
  </View>
)

export default HeaderTitle
