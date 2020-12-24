import * as React from 'react';
import { View, Text, Pressable, Button } from 'react-native';
import { styles } from '../../../utils/styles';

export default class ShopCard extends React.Component {
    render() {
        return (
            <View style={{ marginVertical: 5, marginHorizontal: 10}}>
                <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>
                    Boodschappen: 
                </Text>
                <Text> - Troep </Text>
                <Text> - Andere Troep  </Text>
                <Text> - Letterlijke poep  </Text>
                <Text> - 20 kratten pils </Text>
            </View>
        )
    }
}