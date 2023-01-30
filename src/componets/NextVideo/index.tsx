import React from 'react';
import { View, TouchableOpacity, Image, Text, ActivityIndicator, useWindowDimensions, SafeAreaView } from 'react-native';

import { styles } from './styles';

import { getYoutubeMeta } from "react-native-youtube-iframe";
import { useState } from 'react';

interface NextVideoProps {
  autor: string;
  thumbnail: string;
  thumbnailHeight: number;
  thumbnailWidth: number;
  title: string;
}

export function NextVideo() {
  const { width } = useWindowDimensions();
  const [nextVideoInfos, setNextVideoInfos] = useState<NextVideoProps>();

  getYoutubeMeta('kCpca2z2cls').then(meta => {
    // console.log(meta.thumbnail_url);

    setNextVideoInfos({
      autor: meta.author_name,
      title: meta.title,
      thumbnail: meta.thumbnail_url,
      thumbnailHeight: meta.thumbnail_height,
      thumbnailWidth: meta.thumbnail_width
    })
  });
  // console.log(nextVideoInfos?.thumbnailWidth);

  return (

    <TouchableOpacity >

      {!nextVideoInfos ?

        <ActivityIndicator color={'red'} style={{ height: 220 }} />
        :
        <Image
          source={{
            height: 220,
            width: width,
            uri: nextVideoInfos.thumbnail
          }}
        />
      }
      <View >
        <SafeAreaView style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../../assets/channel.jpg')}
          />

          <Text style={styles.title}>
            {nextVideoInfos?.title}
          </Text>


        </SafeAreaView>
        <Text style={styles.autor}>
          {nextVideoInfos?.autor} 7.6K View 1 day ago
        </Text>
      </View>

    </TouchableOpacity>


  );
}