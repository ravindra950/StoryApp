
// import React from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createStackNavigator } from '@react-navigation/stack';
// import Signup from './src/components/Signup';
// import Login from './src/components/Login';
// // import HomeScreen from './src/components/Home';
// // import Dashboard from './src/components/Dashboard';
// // const Stack = createStackNavigator();

// const App = () => {
//   return (
//     // <NavigationContainer>
//     //   <Stack.Navigator initialRouteName="Home">
//     //     <Stack.Screen name="Home" component={HomeScreen} />
//     //     <Stack.Screen name="Signup" component={Signup} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <Login/>


//   );
// };

// export default App;


// import React from 'react';
// import { withExpoSnack } from 'nativewind';

// import { Text, View } from 'react-native';
// import { styled } from 'nativewind';
// import Signup from './src/components/Signup';
// import Simple from './src/components/Simple';
// const StyledView = styled(View);
// const StyledText = styled(Text);

// const App = () => {
//   return (
//     // <StyledView className="flex-1 items-center justify-center">
//     //   <StyledText className="text-slate-800">Hello World! 🎉</StyledText>
//       <Signup/>
//     // </StyledView>

//   );
// };
// export default App;


// import React from 'react'
// import {Text,View}from 'react-native'
// // import Simple from './src/components/Simple';
// import Simple from './android/app/src/components/Simple'
//  const App =()=>{
//   return(
//     // <View className='bg-black w-full h-full'>
//     //   <Text className='text-white text-bold text-xl'>App</Text>
//     // </View>
//     // <Simple/>
//     <Simple/>
//   )
//  }

//  export default App;




// In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Simple from './android/app/src/components/Simple';
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={Simple} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

// // App.js
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import HomeScreen from './screens/HomeScreen';
// // import SignupScreen from './screens/SignupScreen';
// // import LoginScreen from './screens/LoginScreen';
// // import Signup from './android/app/src/components/SignupScreen';
// import Signup from './android/app/src/components/SignupScreen';
// import Login from './android/app/src/components/LoginScreen';
// import HomeScreen from './android/app/src/components/HomeScreen';
// import Homepage from './android/app/src/components/Homepage';
// import Dashboard from './android/app/src/components/Dashboard';
// import StoryList from './android/app/src/components/Storylist';
// const Stack = createStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Signup">
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Dashboard' }} />
//         {/* <Stack.Screen name="StoryList" component={StoryList} /> */}

//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

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







import * as React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Signup from './android/app/src/component/Signup';
import Signup from './android/app/src/components/SignupScreen';
// import Signup from './android/app/src/components/Signup.js'
// import Login from './android/app/src/component/Login';
import Login from './android/app/src/components/LoginScreen';
// import Dashboard from './android/app/src/component/Dashboard';
import Dashboard from './android/app/src/components/Dash';
// import Dashboard from './android/app/src/components/Dashboard';
// import Dashnav from './android/app/src/component/Dashnav';
// import HomeScreen from './android/app/src/component/HomeScreen';
// import DrawerNavigator from './android/app/src/component/DrawerNavigator';
import DrawerNavigator from './android/app/src/components/DrawerNavigator';
//  import Personal from './android/app/src/component/Personal';
import Personal from './android/app/src/components/Personal';
// import Linkform from './android/app/src/component/Linkform';
// import Screen3 from './android/app/src/component/Screen3';
// import Screen3 from './android/app/src/components/Screen3';
import Rating from './android/app/src/components/Rating'
// import Linkform from './android/app/src/component/Linkform';
import Linkform from './android/app/src/components/Linkform';
import Dash from './android/app/src/components/Dash'
import Icon from 'react-native-vector-icons/FontAwesome';
import Screen2 from './android/app/src/components/Screen2'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// function HomeTabs() {
//   return (
//     <Tab.Navigator>
      
//       <Stack.Screen  component={Dash} />
       
//     </Tab.Navigator>
//   );
// }
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} /> 
        {/* <Stack.Screen name="Dashboard" component={Dash} />  */}
        {/* <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false }}
        /> */}
         <Stack.Screen name="Screen2" component={Screen2} options={{ headerShown: false }} 
        />
        <Stack.Screen name="Personal" component={Personal} /> 
        <Stack.Screen name="Rating" component={Rating} />
        <Stack.Screen name="Linkform" component={Linkform} />
        <Stack.Screen name="Dash" component={Dash} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;