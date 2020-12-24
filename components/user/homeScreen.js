import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../utils/styles';
import { StatusBar } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
//import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import HomeCard from './cards/homecard';
import PilsCard from './cards/pilscard';
import ShopCard from './cards/shopcard';
import { Pressable } from 'react-native';

const text = <Text>fakaman</Text>

class homeScreen extends React.Component {

    // returnText(value) {
    //     return <Text style={{color: '#ffffff'}}>{value}</Text>
    // }

    // handleLongPress() {
    //     alert('Faka')
    // }
    

    handleProfilePress() {
        alert('Profile')
    }
    
    render() {
        return (
            <View style={{backgroundColor: '#212121'}}>
                <StatusBar background='#212121'/>
                <ScrollView style={{width: '100%', backgroundColor: '#212121', marginTop: 15}}>
                    <View style={{width: '90%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', height: 50}}>
                        <Ionicons name='ios-person-outline' size={40} color={'#e0dbd1'}/>
                        <Ionicons name='settings-outline' size={40} color={'#e0dbd1'}/>
                    </View>
                    <LinearGradient colors={['#ff8a65', '#e57373']} style={{width: '90%', aspectRatio: 1.5, borderRadius: 8, marginHorizontal: '5%',}}>
                        <HomeCard/>
                    </LinearGradient>
                    <Text style={styles.cardHeader}>
                        Dingen:
                    </Text>
                    <ScrollView horizontal={true} style={{height: 200, marginHorizontal: '4%', borderRadius: 8}}>
                            <LinearGradient colors={['#64b5f6', '#0097a7']} style={styles.cards}>
                                <Pressable>
                                    <PilsCard/>
                                </Pressable>
                            </LinearGradient>
                        <LinearGradient colors={['#66bb6a', '#4caf50']} style={styles.cards}>
                            <ShopCard/>
                        </LinearGradient>
                        <LinearGradient colors={['#f06292', '#e91e63']} style={styles.cards}>
                                
                        </LinearGradient>
                        <LinearGradient colors={['#ba68c8', '#8e24aa']} style={styles.cards}>
                                
                        </LinearGradient>
                    </ScrollView>
                    <LinearGradient colors={['#ffb74d', '#ff9800']} style={{width: '90%', aspectRatio: 2, borderRadius: 8, marginHorizontal: '5%', marginVertical: '4%'}}>
                    
                    </LinearGradient>
                    <LinearGradient colors={['#26a69a', '#00897b']} style={{width: '90%', aspectRatio: 2, borderRadius: 8, marginHorizontal: '5%', marginVertical: '4%'}}>
                        
                    </LinearGradient>

                </ScrollView>
            </View>
        )
    }
}

export default homeScreen