import React from 'react'
import {
  View, Text, Image, TouchableOpacity, Linking,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

const IssuesItem = ({ issue }) => (
  <TouchableOpacity
    key={issue.id}
    style={styles.container}
    onPress={() => Linking.openURL(issue.html_url)}
  >
    <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    <View style={styles.centerContainer}>
      <Text style={styles.name} numberOfLines={1}>
        {issue.title}
      </Text>
      <Text style={styles.login}>{issue.user.login}</Text>
    </View>
    <Icon style={styles.icon} name="chevron-right" size={20} />
  </TouchableOpacity>
)

export default IssuesItem
