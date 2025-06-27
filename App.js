import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { HomePage } from './screens/HomePage';
import { SecondPage } from './screens/SecondPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen name='Second' component={SecondPage} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}
