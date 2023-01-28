import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Divider } from '@react-native-material/core';
interface HeaderProps {
  autor?: string;
}

export function Header(props: HeaderProps) {
  return (
    <>
      <Divider
        color='#5e5e5e65'
      />
      <View style={styles.container}>

        <Image
          style={styles.image}
          source={require('../../../assets/channel.jpg')}
        />


        <Text style={styles.autor}>
          {props.autor}
        </Text>

        <Text style={styles.subscribers}>
          317K subscribers
        </Text>
        <Text style={styles.subscribed}>
          SUBSCRIBED
        </Text>

        <TouchableOpacity>
          <MaterialCommunityIcons style={styles.bell}
            name="bell-ring"
            size={24}
            color="#8F8F8F"
          />
        </TouchableOpacity>



      </View>
      <Divider
        color='#5e5e5e65'
      />
    </>

  );
}