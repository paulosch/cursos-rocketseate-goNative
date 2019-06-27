import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PodcastsActions from '~/store/ducks/podcasts';

import {
  Container, PodcastList, PageTitle, Podcast, Cover, Info, Title, Count,
} from './styles';

const Main = ({ navigation }) => {
  const dispatch = useDispatch();

  const { data: podcasts } = useSelector(state => state.podcasts);

  useEffect(() => {
    dispatch(PodcastsActions.loadRequest());
  }, [dispatch]);

  const handlePodcastPress = (podcast) => {
    navigation.navigate('Podcast', { podcast });
  };

  return (
    <Container>
      <PodcastList
        ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
        data={podcasts}
        keyExtractor={podcast => String(podcast.id)}
        renderItem={({ item: podcast }) => (
          <Podcast onPress={() => handlePodcastPress(podcast)}>
            <Cover source={{ uri: podcast.cover }} />
            <Info>
              <Title>{podcast.title}</Title>
              <Count>{`${podcast.tracks.length} episódios`}</Count>
            </Info>
          </Podcast>
        )}
      />
    </Container>
  );
};

export default Main;
