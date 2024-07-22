import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Signup"
        onPress={() => navigation.navigate('Signup')}
      />
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

export default HomeScreen;




// import 'react-native-gesture-handler';
// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// // import HomeScreen from './src/components/Home';
// import HomeScreen from './android/app/src/components/HomeScreen';
// import Login from './android/app/src/components/LoginScreen';
// import Signup from './android/app/src/components/SignupScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import Simple from './android/app/src/components/Simple';
// import Details from './android/app/src/components/Details';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const StackNav = () => {
//   return (
//     <Stack.Navigator 
//       screenOptions={{
//         statusBarColor: '#0163d2',
//         headerStyle: {
//           backgroundColor: '#0163d2',
//         },
//         headerTintColor: '#fff',
//         headerTitleAlign: 'center',
//       }}
//       initialRouteName="Signup"
//     >
      
//       <Stack.Screen name='HomeScreen' component={HomeScreen} />
//       <Stack.Screen name='Login' component={Login} />
//       <Stack.Screen name='Signup' component={Signup} 
//         options={{ headerShown: true }}
//       />
//     </Stack.Navigator>
//   );
// }

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator screenOptions={{
//         // statusBarColor: '#0163d2',
//         headerStyle: {
//           backgroundColor: '#0163d2',
//         },
//         headerTintColor: '#fff',
//         headerTitleAlign: 'center',
//       }}
//     >
//         <Drawer.Screen name='Home' component={HomeScreen} />
//         <Drawer.Screen name='Simple' component={Simple} />
//         <Drawer.Screen name='Details' component={Details} />

//         {/* <Drawer.Screen name='Login' component={Login} />
//         <Drawer.Screen name='Signup' component={Signup} /> */}
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
