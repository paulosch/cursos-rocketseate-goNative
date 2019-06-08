import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Post = ({ post }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{post.title}</Text>
    <Text style={styles.subTitle}>{post.subTitle}</Text>
    <Text style={styles.text}>{post.text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    color: '#ccc',
  },
  text: {
    marginTop: 5,
  },
})

export default Post
