import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  image: {
    width: 38,
    height: 38,
    borderRadius: 32
  },
  title: {
    paddingStart: 12,
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  autor: {
    position: 'absolute',
    marginTop: 36,
    marginLeft: 60,
    color: '#8f8f8f',
    fontSize: 11,
    fontWeight: '400',
  },
});