import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../../utils/styles';
import { StatusBar } from 'react-native';
import { Image } from 'react-native-elements';

class homeScreen extends React.Component {

    handleProfilePress() {
        alert('Profile')
    }
    
    render() {
        return (
            <View style={{backgroundColor: '#050505'}}>
                <StatusBar background='#000000'/>
                <ScrollView style={{width: '100%', backgroundColor: '#050505',}}>
                    <View style={{widht: '90%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginVertical: '2%',}}>
                        <Image
                            source={require('../../assets/profile-icon.png')}
                            style={{height: 65,  aspectRatio: 1}}
                        />
                        <View style={{height: 65, aspectRatio: 1, backgroundColor: '#ffffff', borderRadius: 8}}/>
                    </View>
                    <LinearGradient colors={['#3282b8', '#0f4c75']} style={{width: '90%', aspectRatio: 1.5, borderRadius: 8, marginHorizontal: '5%',}}>
                        <Text style={[styles.cardHeader, {color: '#14171A'}]}>
                            Pils:
                        </Text>
                    </LinearGradient>
                    <Text style={styles.cardHeader}>
                        Dingen:
                    </Text>
                    <ScrollView horizontal={true} style={{height: 200, marginHorizontal: '4%', borderRadius: 8}}>
                        <LinearGradient colors={['#3282b8', '#0f4c75']} style={styles.cards}>
                            
                        </LinearGradient>
                        <LinearGradient colors={['#3282b8', '#0f4c75']} style={styles.cards}>
                                
                        </LinearGradient>
                        <LinearGradient colors={['#3282b8', '#0f4c75']} style={styles.cards}>
                                
                        </LinearGradient>
                        <LinearGradient colors={['#3282b8', '#0f4c75']} style={styles.cards}>
                                
                        </LinearGradient>
                    </ScrollView>
                    <LinearGradient colors={['#3282b8', '#0f4c75']} style={{width: '90%', aspectRatio: 2, borderRadius: 8, marginHorizontal: '5%', marginVertical: '4%'}}>
                    
                    </LinearGradient>
                    <LinearGradient colors={['#3282b8', '#0f4c75']} style={{width: '90%', aspectRatio: 2, borderRadius: 8, marginHorizontal: '5%', marginVertical: '4%'}}>
                        
                    </LinearGradient>

                </ScrollView>
            </View>
        )
    }
}

export default homeScreen