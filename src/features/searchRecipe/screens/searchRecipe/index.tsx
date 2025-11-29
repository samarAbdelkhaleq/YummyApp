import React from 'react';
import { TextInput, View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { styles } from './style';
import useSearch from '../../../../hooks/useSearch';
import RecipeCard from '../../../../components/recipeCard';
import YButton from '../../../../components/button';
import { Recipe } from '../../../../Types';
import { COLORS } from '../../../../components/colors';

const SearchRecipe = () => {
  const {
    searchQuery,
    setSearchQuery,
    searchResults,
    getSearchResults,
    OnAddRecipePress,
    OnSelectRecipe,
    isLoading,
    error,
  } = useSearch();

  const renderItem = ({ item, index }: { item: Recipe; index: number }) => (
    <RecipeCard key={index} item={item} onPress={() => OnSelectRecipe(item.id)} />
  );
  const renderContent = () => {
    return (
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={(item: Recipe, index: number) => item.id.toString()}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.description}>{'No recipes found.'}</Text>
          </View>
        }
      />
    );
  };
  const renderLoading = () => {
    return (
      <View style={styles.LoadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={setSearchQuery}
            value={searchQuery}
            returnKeyType="search"
            onBlur={getSearchResults}
            placeholder={'Search for recipes...'}
          />
          <TouchableOpacity style={styles.searchIcon} onPress={getSearchResults}>
            <Ionicons name="search-outline" size={30} color="#e64210ff" />
          </TouchableOpacity>
        </View>
        {isLoading ? renderLoading() : renderContent()}
        {error && (
          <View style={styles.emptyContainer}>
            <Text style={styles.description}>{error}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default SearchRecipe;
