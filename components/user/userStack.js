import * as React from 'react';
import homeScreen from './homeScreen';
import beerScreen from './beerScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

class userStack extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    showIcon: true,
                    showLabel: false,
                }}    
            >
                <Tab.Screen name="Home" component={homeScreen} options={{tabBarIcon: (tabInfo) => (<SimpleLineIcons name="home" size={30} color={tabInfo.tintColor} />)}}/>
                <Tab.Screen name="Beer" component={beerScreen} options={{tabBarIcon: (tabInfo) => (<Ionicons name="beer-outline" size={33} color={tabInfo.tintColor} />)}}/>
            </Tab.Navigator>
        );
      }
}

export default userStack