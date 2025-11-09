import React, { useEffect } from 'react';
import { TextInput, View, FlatList, ScrollView, Text } from 'react-native';

import { styles } from './style';
import useSearch from '../../hooks/useSearch';
import RecipeCard from '../../components/recipeCard';
import YButton from '../../components/button';

const SearchRecipe = () => {
  const { searchQuery, setSearchQuery, searchResults, getSearchResults, OnAddRecipePress, OnSelectRecipe } =
    useSearch();

  useEffect(() => {
    if (searchQuery.length > 2) {
      getSearchResults();
    }
  }, [searchQuery, getSearchResults]);

  const renderItem = ({ item, index }) => (
    <RecipeCard key={index} item={item} onPress={() => OnSelectRecipe(item.id)} />
  );

  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSearchQuery}
          value={searchQuery}
          placeholder={'Search for recipes...'}
        />
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.description}>{'No recipes found.'}</Text>
            </View>
          }
        />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <YButton title="Add Recipe" onPress={OnAddRecipePress} />
      </View>
    </>
  );
};

export default SearchRecipe;
