import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../components/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerContainer: {
    alignItems: 'center',
    borderRadius: 8,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  headTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: COLORS.primary,
  },
  nameStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headTitleContainer: {
    padding: 10,
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '90%',
    marginVertical: 20,
  },
});
