import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
  },
  comments: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  number: {
    paddingLeft: 8,
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
    paddingBottom: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
  },
  text: {
    paddingTop: 8,
    paddingLeft: 12,
    color: '#fff',
    fontSize: 12
  },
});