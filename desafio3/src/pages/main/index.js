import React, { Component } from 'react'
import {
  Modal, Text, View, StyleSheet, StatusBar, Alert, Button,
} from 'react-native'
import MapView, { Marker } from 'react-native-maps'

import Form from './form'

export default class Main extends Component {
  state = {
    region: {
      latitude: -27.2177659,
      longitude: -49.6451598,
      latitudeDelta: 0.0042,
      longitudeDelta: 0.0031,
    },
    modalVisible: false,
  }

  onRegionChange(region) {
    this.setState({ region })
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible })
  }

  render() {
    const { region, modalVisible } = this.state
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          region={region}
          onRegionChange={() => this.onRegionChange}
        />
        <StatusBar barStyle="dark-content" />
        <Button
          onPress={() => {
            this.setModalVisible(true)
          }}
          title="Show Modal"
        />
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <Form setModalVisible={this.setModalVisible} />
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
