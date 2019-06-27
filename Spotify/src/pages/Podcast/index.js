import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
  BackButton,
} from './styles';

const Podcast = ({ navigation }) => {
  const podcast = navigation.getParam('podcast');

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <EpisodeList
        ListHeaderComponent={() => (
          <PodcastDetails>
            <Background source={{ uri: podcast.cover }} blurRadius={5} />
            <BackButton onPress={handleBack}>
              <Icon name="arrow-back" color="#FFF" size={24} />
            </BackButton>
            <Cover source={{ uri: podcast.cover }} />

            <PodcastTitle>{podcast.title}</PodcastTitle>
            <PlayButton>
              <PlayButtonText>REPRODUZIR</PlayButtonText>
            </PlayButton>
          </PodcastDetails>
        )}
        data={podcast.tracks}
        keyExtractor={episode => String(episode.id)}
        renderItem={({ item: episode }) => (
          <Episode>
            <Title>{episode.title}</Title>
            <Author>{episode.artist}</Author>
          </Episode>
        )}
      />
    </Container>
  );
};

export default Podcast;
