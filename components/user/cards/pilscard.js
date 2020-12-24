import * as React from 'react';
import { Pressable, Button } from 'react-native';
import { View, Text } from 'react-native';
import { styles } from '../../../utils/styles';

export default class PilsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "Liam",
            homedata: [],
            userdata: []
        }
    }

    componentDidMount() {
        //Alle opstartfuncties
        this.handleData()
        this.defineData()
        this.forceUpdate()
    }
    
    handleData() {
        //Inladen Data (vanuit JSON)
        try {
            let data = require('../../../assets/JSON/homes.json')
            data = data.homes[0]
            this.state.homedata = data
        } catch(error) {
            alert('Kon data niet laden')
        }
    }

    defineData() {
        try {
            let userdata = this.state.homedata.users[this.state.user]
            this.state.userdata = userdata
        } catch(error) {
            alert('fout bij: defining data')
        }
    }

    render() {
        return (
            <View style={{ marginVertical: 5, marginHorizontal: 10}}>
                <View> 
                    <Text style={{color: '#000000', fontWeight: 'bold', fontSize: 20}}>
                        Pils: {this.state.userdata.pils}
                    </Text>
                </View>
                <View>
                    <Text>
                        Leaderboard:
                    </Text>
                </View>
            </View>
        )
    }
} 