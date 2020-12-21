import * as React from 'react';
import homeScreen from './homeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

class adminStack extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={homeScreen}/>
            </Tab.Navigator>
        );
      }
}

export default adminStack