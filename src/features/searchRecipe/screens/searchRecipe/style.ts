import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../components/colors';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textInput: {
    padding: 16,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 50,
    borderRadius: 8,
    width: '85%',
  },
  buttonContainer: {
    alignSelf: 'center',
    width: '90%',
    bottom: height * 0.05,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 1,
    zIndex: 1,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  LoadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    alignSelf: 'center',
    marginLeft: 10,
    marginTop: 50,
  },
});
