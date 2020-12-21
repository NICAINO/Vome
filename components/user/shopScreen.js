import * as React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../utils/styles';
import { StatusBar } from 'react-native';
import { Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import ShopCard from './cards/shopcard'

export default class shopScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#212121', flex: 1,}}>
                <StatusBar background='#212121'/>
                <AntDesign name='shoppingcart' size={40} color={'#e0dbd1'} style={{alignSelf: 'center', marginHorizontal: '5%', height: 50, marginTop: 15}}/>
                <LinearGradient colors={['#f06292', '#e91e63']} style={{width: '90%', aspectRatio: 1, borderRadius: 8, marginHorizontal: '5%'}}>
                    <ShopCard/>
                </LinearGradient>
                <Text style={styles.cardHeader}>
                    Dingen:
                </Text>
                <View style={{flexDirection: 'row', flex: 1, marginHorizontal: '5%', marginBottom: '4%',}}>
                    <LinearGradient colors={['#64b5f6', '#0097a7']} style={{flex: 3, borderRadius: 8, marginRight: 15}}>
        
                    </LinearGradient>
                    <AntDesign 
                        name="pluscircle" 
                        size={75} color="#ff8a65"
                        onPress={() => {alert('Doe je eigen boodschappen')}}
                        style={{alignSelf: 'flex-end'}}
                    />
                </View>
            </View>
        )
    }
}