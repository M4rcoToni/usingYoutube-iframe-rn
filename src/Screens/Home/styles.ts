import { StyleSheet } from 'react-native';
export const VIDEO_HEIGHT = 230;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#262626'
  },
  player: {
    width: '100%',
    padding: SCREEN_SPACE,
    height: VIDEO_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    width: '100%',
    padding: 12,
    justifyContent: 'center'
  }
});