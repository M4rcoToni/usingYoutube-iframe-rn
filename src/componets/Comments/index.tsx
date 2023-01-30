import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';
import { Divider } from '@react-native-material/core';


export function Comments() {
  return (
    <>
      <View style={styles.container}>

        <Text style={styles.comments}>
          Comments
        </Text>
        <Text style={styles.number}>
          9
        </Text>

        <TouchableOpacity
          activeOpacity={0.4}
        >

          <MaterialIcons style={styles.expandown}
            name='expand-more' size={18} color='#8f8f8f' />
          <MaterialIcons style={styles.expandup}
            name='expand-less' size={18} color='#8f8f8f' />

        </TouchableOpacity>

      </View>

      <View style={styles.comment}>
        <Image
          style={styles.image}
          source={require('../../../assets/comment.jpg')}
        />
        <Text style={styles.text}>
          A rocket sabe muito escolher os educadores
        </Text>
      </View>

      <Divider
        style={{ height: 2 }}
        color='#5e5e5e65'
      />
    </>
  );
}