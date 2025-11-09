import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';

const RecipeCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.rowContainer}>
        <Image source={{ uri: item.image }} style={styles.recipeLogo} />
        <View>
          <Text style={styles.titleStyle}>{item.name}</Text>
          <Text style={styles.titleStyle}>{item.cuisine}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeCard;
