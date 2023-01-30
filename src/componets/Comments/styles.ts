import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  comments: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  number: {
    paddingLeft: 8,
    fontSize: 12,
    color: '#8f8f8f'
  },
  expandup: {
    marginLeft: 260,
    position: 'absolute',
  },
  expandown: {
    marginLeft: 260,
    position: 'absolute',
    marginTop: 8
  },
  image: {
    borderRadius: 100,
    width: 32,
    height: 32,
  },
  comment: {
    paddingBottom: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  text: {
    paddingTop: 6,
    paddingLeft: 10,
    color: '#fff',
    fontSize: 11,
    fontWeight: '400'
  },
});