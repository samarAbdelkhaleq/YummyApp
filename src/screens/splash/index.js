import React, { useEffect } from 'react';
import { Image, View, Text, ActivityIndicator } from 'react-native';

import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo.png';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Search');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.textStyle}>Yummy!</Text>
      <ActivityIndicator size="large" color="#ff6a00f4" style={styles.indicator} />
    </View>
  );
};

export default Splash;
