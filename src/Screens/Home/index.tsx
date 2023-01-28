import React, { useCallback, useState } from 'react';
import { View, ActivityIndicator, useWindowDimensions, Alert, } from 'react-native';
import YoutubeIframe, { PLAYER_STATES, getYoutubeMeta } from "react-native-youtube-iframe";
import { Divider } from "@react-native-material/core";

import { SCREEN_SPACE, styles, VIDEO_HEIGHT } from '../Home/styles';
import * as ScreenHorientation from 'expo-screen-orientation'
import { Title } from '../../componets/Title';
import { ViewsandHour } from '../../componets/ViewsandHour';
import { Interactions } from '../../componets/Interactions';
import { Header } from '../../componets/Header';
import { Comments } from '../../componets/Comments';

interface VideoProps {
  title: string
  autor: string
}

export function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const { width } = useWindowDimensions();
  const VIDEO_WIDTH = width
  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenHorientation.lockAsync(ScreenHorientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenHorientation.lockAsync(ScreenHorientation.OrientationLock.PORTRAIT);

    }
  }, []);

  const onChangeState = useCallback((state: string) => {
    if (state == PLAYER_STATES.ENDED) {
      Alert.alert("Eai curtiu o video?", "Deixe o like")
    }

  }, []);

  const [videoInfos, setVideoInfos] = useState<VideoProps>();

  getYoutubeMeta('0GOUF8vNqzE').then(meta => {
    // console.log(meta.author_name);

    setVideoInfos({
      title: meta.title,
      autor: meta.author_name
    })
  });

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe
          height={VIDEO_HEIGHT}
          width={videoReady ? VIDEO_WIDTH : 0}
          videoId='0GOUF8vNqzE'
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
        {!videoReady && <ActivityIndicator color={'red'} />}

      </View>
      <View style={styles.title}>
        <Title
          title={videoInfos?.title}
        />
        <ViewsandHour />

        <Interactions />
      </View>

      <Header
        autor={videoInfos?.autor}
      />

      <Comments />
    </View>
  );
}