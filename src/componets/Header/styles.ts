import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 32
  },
  autor: {
    paddingStart: 16,
    paddingTop: 4,
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  subscribers: {
    fontSize: 10,
    position: 'absolute',
    color: '#8F8F8F',
    marginLeft: 68,
    marginTop: 36
  },
  subscribed: {
    color: '#8F8F8F',
    padding: 8,
    paddingLeft: 112,
    fontWeight: '500',
  },
  bell: {
    padding: 6
  }
});