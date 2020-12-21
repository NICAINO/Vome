import * as React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../utils/styles';
import { StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class beerScreen extends React.Component {
    render() {
        return (
            <View style={{backgroundColor: '#050505', flex: 1}}>
                <StatusBar background='#000000'/>
                    <View style={{width: '90%', aspectRatio: 6, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%',}}>
                        <View style={{height: '100%', aspectRatio: 1, backgroundColor: '#ffffff', borderRadius: 8}}/>
                        <View style={{height: '100%', aspectRatio: 1, backgroundColor: '#ffffff', borderRadius: 8}}/>
                    </View>
                    <LinearGradient colors={['#3282b8', '#0f4c75']} style={{width: '90%', aspectRatio: 1, borderRadius: 8, marginHorizontal: '5%',}}>
                        <Text style={[styles.cardHeader, {color: '#14171A'}]}>
                            Pils:
                        </Text>
                    </LinearGradient>
                    <Text style={styles.cardHeader}>
                        Dingen:
                    </Text>
                    <View style={{flexDirection: 'row', flex: 1, marginHorizontal: '5%', marginVertical: '4%', justifyContent: 'space-between'}}>
                        <LinearGradient colors={['#3282b8', '#0f4c75']} style={{flex: 2, borderRadius: 8}}>
                        
                        </LinearGradient>
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <Ionicons name="beer-outline" size={40} color="#3282b8" style={{flex: 1, alignSelf: 'center'}}/> 
                            <LinearGradient colors={['#3282b8', '#0f4c75']} style={{flex: 2, aspectRatio: 1, borderRadius: 8,}}>
                                
                            </LinearGradient>
                        </View>
                    </View>
            </View>
        )
    }
}

export default beerScreen