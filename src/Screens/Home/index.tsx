import React, { useCallback, useState } from 'react';
import { View, ActivityIndicator, useWindowDimensions, Alert, ScrollView, SafeAreaView, TouchableOpacity, } from 'react-native';
import YoutubeIframe, { PLAYER_STATES, getYoutubeMeta } from "react-native-youtube-iframe";

import { SCREEN_SPACE, styles, VIDEO_HEIGHT } from '../Home/styles';
import * as ScreenHorientation from 'expo-screen-orientation'
import { Title } from '../../componets/Title';
import { ViewsandHour } from '../../componets/ViewsandHour';
import { Interactions } from '../../componets/Interactions';
import { Header } from '../../componets/Header';
import { Comments } from '../../componets/Comments';
import { NextVideo } from '../../componets/NextVideo';

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
    // console.log(meta.thumbnail_url);

    setVideoInfos({
      title: meta.title,
      autor: meta.author_name,
    })
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

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
        {/* fazer um componet */}
        <View style={styles.title}>
          <TouchableOpacity>
            <Title
              title={videoInfos?.title}
            />
            <ViewsandHour />
          </TouchableOpacity>



          <Interactions />
        </View>

        <Header
          autor={videoInfos?.autor}
        />

        <Comments />
        <NextVideo />
      </ScrollView>

    </SafeAreaView>
  );
}