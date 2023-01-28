import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';
interface Props {
  title?: string;
}
export function Title({ title }: Props) {
  return (
    <View style={styles.view}>
      <Text style={styles.container}>
        {title}

      </Text>
      <Feather
        style={{ paddingRight: 28 }}
        name='chevron-down'
        color='#fff'
        size={24}
      />
    </View>
  );
}