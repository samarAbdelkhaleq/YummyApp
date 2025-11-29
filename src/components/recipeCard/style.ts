import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginBottom: 10,
  },
  recipeLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    marginLeft: 10,
  },
});
