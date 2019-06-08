import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as RepositoriesActions } from '~/store/ducks/repositories'

import { Text, ActivityIndicator } from 'react-native'
import { Container } from './styles'

class Repositories extends Component {
  componentDidMount() {
    const { loadRepositoriesRequest } = this.props
    loadRepositoriesRequest()
  }

  render() {
    const { loading, data } = this.props.repositories
    return (
      <Container>
        {loading ? (
          <ActivityIndicator size="small" color="#ccc" />
        ) : (
          data.map(repository => <Text key={repository.id}>{repository.name}</Text>)
        )}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  repositories: state.repositories,
})

const mapDispatchToProps = dispatch => bindActionCreators(RepositoriesActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Repositories)
