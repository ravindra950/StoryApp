// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={tailwind('flex-1 justify-center items-center bg-gray-100')}>
      <Text style={tailwind('text-2xl mb-5')}>Welcome to Home Screen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  );
};

export default HomeScreen;
