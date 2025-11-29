import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { COLORS } from '../colors';

interface YButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
}

const YButton = ({ title, onPress, loading }: YButtonProps) => {
  return (
    <TouchableOpacity disabled={loading} style={styles.container} onPress={onPress}>
      <Text style={styles.titleStyle}>{title}</Text>
      {loading && <ActivityIndicator size={'small'} color={COLORS.white} />}
    </TouchableOpacity>
  );
};

export default YButton;
