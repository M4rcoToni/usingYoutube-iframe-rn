import { StyleSheet } from 'react-native';
export const VIDEO_HEIGHT = 180;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_SPACE,
    backgroundColor: '#000'
  },
  player: {
    width: '100%',
    height: VIDEO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  }
});