import React, { Component } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

import Post from './post'

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
      {
        id: 2,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
      {
        id: 3,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
      {
        id: 4,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
      {
        id: 5,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
      {
        id: 6,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
      {
        id: 7,
        title: 'Aprendendo React Native',
        subTitle: 'Paulo Cesar S. Gral',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim est justo, eget cursus risus luctus vitae. Pellentesque finibus pulvinar consectetur',
      },
    ],
  }

  render() {
    const { posts } = this.state
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    padding: 20,
  },
})
