import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../store';
import { login } from '../features/auth/authSlice';
import { isLoading, loggedUser } from '../selectors/authSelector';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type loginScreenNavigationProp = NativeStackNavigationProp<RootParamList, 'Login'>;
const useAuth = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading = useSelector(isLoading);
  const navigation = useNavigation<loginScreenNavigationProp>();
  const handleLogin = (data: { userName: string; password: string }) => {
    dispatch(login({ userName: data.userName, password: data.password }));
    if (!loading) {
      navigation.replace('Search');
    }
  };
  return {
    handleLogin,
    loading,
  };
};

export default useAuth;
