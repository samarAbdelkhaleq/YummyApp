import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../components/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  errorText: {
    color: COLORS.error,
    marginBottom: 10,
  },
});
