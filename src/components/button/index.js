import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const YButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default YButton;
