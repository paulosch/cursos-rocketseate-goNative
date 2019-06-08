import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native'
import api from '../../services/api'

import styles from './styles'

class Welcome extends Component {
  static proptypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  }

  state = {
    userName: '',
    loading: false,
    error: false,
  }

  checkUserExists = async (userName) => {
    const user = await api.get(`/users/${userName}`)

    return user
  }

  saveUser = async (userName) => {
    await AsyncStorage.setItem('@Githuber:username', userName)
  }

  signIn = async () => {
    const { userName } = this.state
    const { navigation } = this.props

    this.setState({ loading: true })

    try {
      await this.checkUserExists(userName)
      await this.saveUser(userName)

      navigation.navigate('User')
    } catch (error) {
      this.setState({ loading: false, error: true })
    }
  }

  render() {
    const { userName, loading, error } = this.state
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Bem vindo</Text>
        <Text style={styles.text}>Para continuar precisamos que você informe seu usuário</Text>

        {error && <Text style={styles.error}>Usuário inexistente</Text>}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={userName}
            onChangeText={text => this.setState({ userName: text })}
          />

          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            {loading ? (
              <ActivityIndicator size="small" color="#FFF" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Welcome
