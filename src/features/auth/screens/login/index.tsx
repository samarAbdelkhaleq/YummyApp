import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { styles } from './style';
import { Controller, useForm } from 'react-hook-form';
import YButton from '../../../../components/button';
import useAuth from '../../../../hooks/useAuth';

type LoginFormData = {
  userName: string;
  password: string;
};

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const { handleLogin, loading } = useAuth();
  const onSubmit = (data: LoginFormData) => {
    handleLogin(data);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formContainer}>
        <Controller
          control={control}
          name="userName"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="User Name"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
            />
          )}
        />
        {errors.userName && <Text style={styles.errorText}>This is required.</Text>}
        <Controller
          control={control}
          name="password"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
            />
          )}
        />
        {errors.password && <Text style={styles.errorText}>This is required.</Text>}
        <YButton title="Login" onPress={handleSubmit(onSubmit)} loading={loading} />
      </View>
    </ScrollView>
  );
};

export default Login;
