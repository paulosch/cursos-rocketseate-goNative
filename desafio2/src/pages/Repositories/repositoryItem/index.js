import React from 'react'
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const repositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity
    key={repository.id}
    style={styles.container}
    onPress={() => {
      navigation.navigate('Issues', {
        id: repository.id,
        name: repository.name,
        full_name: repository.full_name,
      })
    }}
  >
    <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    <View style={styles.centerContainer}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.login}>{repository.owner.login}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={20} />
  </TouchableOpacity>
)

export default repositoryItem
