import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Recipe } from '../../Types';

interface RecipeCardProps {
  item: Recipe;
  onPress: () => void;
}
const RecipeCard = ({ item, onPress }: RecipeCardProps) => {
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
