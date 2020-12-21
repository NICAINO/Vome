import * as React from 'react';
import homeScreen from './homeScreen';
import beerScreen from './beerScreen';
import shopScreen from './shopScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

class userStack extends React.Component {
    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    showIcon: true,
                    showLabel: false,
                    // inactiveBackgroundColor: "#666666",
                    activeBackgroundColor: '#c0c0c0',
                    style: {
                        elevation: 0,
                        backgroundColor: '#a0a0a0'
                    }
                }}
                //style={{backgroundColor: '#050505'}}  
            >
                <Tab.Screen name="Shop" component={shopScreen} options={{tabBarIcon: (tabInfo) => (<AntDesign name="shoppingcart" size={33} color={tabInfo.tintColor} />)}}/>
                <Tab.Screen name="Home" component={homeScreen} options={{tabBarIcon: (tabInfo) => (<SimpleLineIcons name="home" size={30} color={tabInfo.tintColor} />)}}/>
                <Tab.Screen name="Beer" component={beerScreen} options={{tabBarIcon: (tabInfo) => (<Ionicons name="beer-outline" size={33} color={tabInfo.tintColor} />)}}/>
            </Tab.Navigator>
        );
      }
}

export default userStack