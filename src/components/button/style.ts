import { StyleSheet } from 'react-native';
import { COLORS } from '../colors';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: COLORS.white,
  },
});
