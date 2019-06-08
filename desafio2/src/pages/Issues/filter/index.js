import React from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Filter = ({ activeFilter, changeFilter }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('all')}>
      <Text style={[styles.buttonText, activeFilter === 'all' && styles.activeFilter]}>Todas</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('open')}>
      <Text style={[styles.buttonText, activeFilter === 'open' && styles.activeFilter]}>
        Abertas
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonContainer} onPress={() => changeFilter('closed')}>
      <Text style={[styles.buttonText, activeFilter === 'closed' && styles.activeFilter]}>
        Fechadas
      </Text>
    </TouchableOpacity>
  </View>
)

export default Filter
