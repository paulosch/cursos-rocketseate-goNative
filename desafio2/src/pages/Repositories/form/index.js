import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Keyboard,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import api from '~/services/api'

import styles from './styles'

export default class Form extends Component {
  state = {
    repoName: '',
    loading: false,
  }

  checkRepoExists = async (repoName) => {
    const { data } = await api.get(`/repos/${repoName}`)

    return data
  }

  handleAdd = async () => {
    this.setState({ loading: true })
    const { repoName } = this.state
    const { saveRepo } = this.props

    try {
      const repo = await this.checkRepoExists(repoName)
      await saveRepo(repo)
      this.setState({ repoName: '', loading: false })
    } catch (err) {
      this.setState({ loading: false, repoName: '' })
      Alert.alert('Erro', err.message)
    }
  }

  render() {
    const { repoName, loading } = this.state
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={repoName}
          onChangeText={text => this.setState({ repoName: text })}
          placeholder="Adicionar novo repositório"
          onSubmitEditing={Keyboard.dismiss}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleAdd}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Icon name="plus" size={24} style={styles.icon} />
          )}
        </TouchableOpacity>
      </View>
    )
  }
}
