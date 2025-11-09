import React, { useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

import { styles } from './style';
import useRecipeDetails from '../../hooks/useRecipeDetails';
import { useRoute } from '@react-navigation/native';
import YButton from '../../components/button';

const RecipeDetails = () => {
  const { params } = useRoute();
  const recipeId = params?.recipeId;
  const { getDetails, recipeDetails } = useRecipeDetails({ recipeId });

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const renderIngredients = () =>
    recipeDetails?.ingredients?.map((ingredient, index) => <Text key={index}>{`\u2022 ${ingredient}`}</Text>);
  const renderInstructions = () =>
    recipeDetails?.instructions?.map((instruction, index) => (
      <Text key={index}>{`\u2022 ${instruction}`}</Text>
    ));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: recipeDetails?.image }} style={styles.banner} />
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.nameStyle}>{recipeDetails?.name}</Text>
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.headTitleStyle}>{'Recipe ingredients:'}</Text>
        {renderIngredients()}
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.headTitleStyle}>{'How to prepare:'}</Text>
        {renderInstructions()}
      </View>
      <View style={styles.buttonContainer}>
        <YButton title="Add to Bookmarks" onPress={() => {}} />
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
