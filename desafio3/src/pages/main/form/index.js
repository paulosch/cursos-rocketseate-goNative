import React from 'react'

import {
  Container, Text, Input, Button, ButtonText,
} from './styles'

const Form = ({ setModalVisible }) => (
  <Container>
    <Text>Adicionar novo local</Text>

    <Input placeholder="Usuário no Github" />

    <Button onPress={setModalVisible(false)}>
      <ButtonText>Cancelar</ButtonText>
    </Button>

    <Button>
      <ButtonText>Salvar</ButtonText>
    </Button>
  </Container>
)

export default Form
