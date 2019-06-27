import React from 'react';

import {
  Container,
  CoverBackground,
  EspidodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
  ControlIcon,
} from './styles';

const Player = () => (
  <Container>
    <CoverBackground source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }} />

    <EspidodeInfo>
      <Title>PaperCut</Title>
      <Author>Linking park</Author>
    </EspidodeInfo>

    <Controls>
      <ControlButton onPress={{}}>
        <ControlIcon name="skip-previous" />
      </ControlButton>

      <ControlButton onPress={{}}>
        <ControlIcon name="play-circle-filled" />
      </ControlButton>

      <ControlButton onPress={{}}>
        <ControlIcon name="skip-next" />
      </ControlButton>
    </Controls>
  </Container>
);

export default Player;
