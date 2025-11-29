import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { styles } from './style';
import { Controller, useForm } from 'react-hook-form';
import YButton from '../../../../components/button';
import useRecipe from '../../../../hooks/useRecipe';
import { NewRecipe } from '../../../../Types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootParamList } from '../../../../Types';

type AddRecipeScreenNavigationProp = NativeStackNavigationProp<RootParamList, 'AddRecipe'>;
const AddRecipe = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewRecipe>();

  const { onAddNewRecipe, isLoadingAdd } = useRecipe();
  const navigation = useNavigation<AddRecipeScreenNavigationProp>();

  const onSubmit = (data: NewRecipe) => {
    onAddNewRecipe(data);
    if (!isLoadingAdd) {
      navigation.goBack();
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Add Recipe</Text>
        <Controller
          control={control}
          name="name"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Recipe Name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
            />
          )}
        />
        {errors.name && <Text style={styles.errorText}>This is required.</Text>}
        <Controller
          control={control}
          name="ingredients"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline={true}
              placeholder="Ingredients"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.multilineInput}
            />
          )}
        />
        {errors.ingredients && <Text style={styles.errorText}>This is required.</Text>}
        <Controller
          control={control}
          name="instructions"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              multiline={true}
              placeholder="Instructions"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.multilineInput}
            />
          )}
        />
        {errors.instructions && <Text style={styles.errorText}>This is required.</Text>}
        <YButton title="Add Recipe" onPress={handleSubmit(onSubmit)} loading={isLoadingAdd} />
      </View>
    </ScrollView>
  );
};

export default AddRecipe;
