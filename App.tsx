import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Home } from './src/componets/Home';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='#000'
        translucent
      />
      <Home />

    </>
  );
}


