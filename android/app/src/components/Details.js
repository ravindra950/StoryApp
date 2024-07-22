import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Details({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details;
