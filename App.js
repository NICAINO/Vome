import * as React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import loginScreen from './components/loginScreen';
import userStack from './components/user/userStack';
import adminStack from './components/admin/adminStack';

const Stack = createStackNavigator();

class Vome extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="loginScreen" component={loginScreen} options={{headerShown: false}}/>
          <Stack.Screen name="userStack" component={userStack} options={{headerShown: false}}/>
          <Stack.Screen name="adminStack" component={adminStack} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Vome

//Circular action menu: https://github.com/geremih/react-native-circular-action-menu
