import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, AsyncStorage, Keyboard, } from 'react-native'

import Form from './form'
import RepositoryItem from './repositoryItem'

import HeaderTitle from '~/components/headerTitle'
import styles from './styles'

export default class Repositories extends Component {
  static navigationOptions = {
    headerTitle: <HeaderTitle title="Repositórios" />,
  }

  state = {
    refreshing: false,
    loading: true,
    repos: [],
  }

  componentDidMount() {
    this.loadRepositories()
  }

  renderListItem = ({ item }) => {
    const { navigation } = this.props
    return <RepositoryItem repository={item} navigation={navigation} />
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true })

    let repos = []
    const savedRepos = await AsyncStorage.getItem('@Gitrepo:reposArray')

    if (savedRepos !== null) {
      repos = JSON.parse(savedRepos)
    }

    this.setState({ repos, loading: false, refreshing: false })
  }

  renderList = () => {
    const { repos, refreshing } = this.state
    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    )
  }

  saveRepo = async (repo) => {
    this.setState({ loading: true })
    Keyboard.dismiss()

    let repos = []
    const savedRepos = await AsyncStorage.getItem('@Gitrepo:reposArray')

    if (savedRepos !== null) {
      repos = JSON.parse(savedRepos)
    }

    repos.push(repo)

    await AsyncStorage.setItem('@Gitrepo:reposArray', JSON.stringify(repos))

    this.setState({ repos, loading: false })
  }

  render() {
    const { loading } = this.state
    return (
      <View style={styles.container}>
        <Form saveRepo={this.saveRepo} />

        <View style={styles.separetor} />

        {loading ? <ActivityIndicator style={styles.loading} /> : this.renderList()}
      </View>
    )
  }
}
