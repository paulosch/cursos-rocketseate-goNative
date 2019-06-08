import React, { Component } from 'react'
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'

import api from '~/services/api'

import HeaderTitle from '~/components/headerTitle'
import IssuesItem from './issuesItem'
import Filter from './filter'

import colors from '../../styles/colors'
import styles from './styles'

export default class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle title={navigation.getParam('name', 'Issues')} />,
  })

  state = {
    issues: [],
    activeFilter: 'all',
    loading: true,
    refreshing: false,
    error: false,
  }

  componentDidMount = async () => {
    await this.loadIssues()
  }

  loadIssues = async () => {
    try {
      const { navigation } = this.props
      const repoId = navigation.getParam('id', 0)

      const { data } = await api.get(`/repositories/${repoId}/issues`)

      this.setState({ issues: data, loading: false })
    } catch (err) {
      this.setState({ loading: false, error: true })
    }
  }

  changeFilter = async (value) => {
    this.setState({ activeFilter: value, loading: true })

    const { navigation } = this.props

    try {
      const { data } = await api.get(`/repos/${navigation.getParam('full_name')}/issues?state=${value}`)

      this.setState({ issues: data, loading: false })
    } catch (_err) {
      this.setState({ error: 'Erro ao recuperar as Issues', loading: false })
    }
  };

  renderList = () => {
    const { issues, refreshing } = this.state

    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    )
  }

  renderListItem = ({ item }) => <IssuesItem issue={item} />

  renderLoading = () => {
    const { loading, error } = this.state
    if (loading) return <ActivityIndicator style={styles.loading} size="large" color={colors.primary} />

    if (error) return <Text style={styles.error}>Erro ao carregar issues</Text>

    return this.renderList()
  }

  render() {
    const { activeFilter } = this.state

    return (
      <View style={styles.container}>
        <Filter activeFilter={activeFilter} changeFilter={this.changeFilter} />
        {this.renderLoading()}
      </View>
    )
  }
}
