import React, { useEffect } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

import { styles } from './style';
import useRecipe from '../../../../hooks/useRecipe';
import { useSelector } from 'react-redux';
import { recipeDetails } from '../../../../selectors/recipeSelector';

const RecipeDetails = () => {
  const { getDetails } = useRecipe();
  const details = useSelector(recipeDetails);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  const renderIngredients = () =>
    details?.ingredients?.map((ingredient: string, index: number) => (
      <Text key={index}>{`\u2022 ${ingredient}`}</Text>
    ));
  const renderInstructions = () =>
    details?.instructions?.map((instruction: string, index: number) => (
      <Text key={index}>{`\u2022 ${instruction}`}</Text>
    ));
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bannerContainer}>
        <Image source={{ uri: details?.image }} style={styles.banner} />
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.nameStyle}>{details?.name}</Text>
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.headTitleStyle}>{'Recipe ingredients:'}</Text>
        {renderIngredients()}
      </View>
      <View style={styles.headTitleContainer}>
        <Text style={styles.headTitleStyle}>{'How to prepare:'}</Text>
        {renderInstructions()}
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
