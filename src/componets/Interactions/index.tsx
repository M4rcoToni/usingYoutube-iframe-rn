
import React from 'react';
import { TouchableOpacity, View, FlatList, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
interface action {
  id: number,
  name: string;
  title: string;
}

export function Interactions() {

  const actions: action[] = [
    { id: 1, name: "like2", title: '259' },
    { id: 2, name: "dislike2", title: 'Dislike' },
    { id: 4, name: "export", title: 'Share' },
    { id: 3, name: "download", title: 'Download' },

  ]

  return (
    <>

      <FlatList
        horizontal
        data={actions}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.list}>

              {item.id == 4 ?

                <Ionicons name="arrow-redo-outline" size={24} color="#fff" />
                :
                <AntDesign
                  name={item.name}
                  size={24}
                  color='#fff'
                />
              }
              <Text style={styles.title}>
                {item.title}
              </Text>
            </TouchableOpacity>

          )
        }}
      />
    </>

    // <TouchableOpacity>
    //   <Feather

    //     name='download'
    //     size={28}
    //     color='#fff'
    //   />
    // </TouchableOpacity>

    // <TouchableOpacity>
    //   <MaterialCommunityIcons
    //     name='share-outline'
    //     size={28}
    //     color='#fff'
    //   />
    // </TouchableOpacity>




  );
}