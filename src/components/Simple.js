// import React from 'react'
// import {View,Text} from 'react-native';

// const Simple = () => {
//  return(
//   <View>
//     <Text className='text-center bg-blue-100 text-5xl'>hello</Text>
//     <Text className='bg-red-800'>Hello</Text>

//   </View>
//   );
// };


// export default Simple;


function Simple() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Simple() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Simple} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}