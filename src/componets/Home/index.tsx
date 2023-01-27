import React, { useCallback, useState } from 'react';
import { View, ActivityIndicator, useWindowDimensions, Alert } from 'react-native';
import YoutubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";

import { SCREEN_SPACE, styles, VIDEO_HEIGHT } from './styles';
import * as ScreenHorientation from 'expo-screen-orientation'
export function Home() {
  const [videoReady, setVideoReady] = useState(false);
  const { width } = useWindowDimensions();
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

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
    </View>
  );
}