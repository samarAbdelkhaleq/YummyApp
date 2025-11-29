import React, { useEffect } from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { RootParamList } from '../../Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { getToken } from '../../services/utils/helperToken';
import { COLORS } from '../../components/colors';
import Ionicons from '@react-native-vector-icons/ionicons';

type SplashScreenNavigationProp = NativeStackNavigationProp<RootParamList, 'Splash'>;
const Splash = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  const isLoggedIn = async () => {
    const token = await getToken();
    if (token) {
      navigation.replace('BottomTabs');
    } else {
      navigation.replace('Login');
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      isLoggedIn();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Ionicons name="fast-food-outline" size={100} color={COLORS.primary} />
      <Text style={styles.textStyle}>Yummy!</Text>
      <ActivityIndicator size="large" color={COLORS.primary} style={styles.indicator} />
    </View>
  );
};

export default Splash;
