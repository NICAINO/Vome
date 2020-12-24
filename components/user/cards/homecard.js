import * as React from 'react';
import { Text, View } from 'react-native';

export default class HomeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            month: new Date().getMonth(),
            day: new Date().getDate()
        }
    }

    componentDidMount() {
        //Alle opstartfuncties
        this.chooseMonth()
        this.forceUpdate()
    }

    chooseMonth() {
        let months = ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December']
        let month = months[new Date().getMonth()]
        return month
    }
    render() {
        return (
            <View style={{ marginVertical: 5, marginHorizontal: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 40}}>{this.state.day}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>{this.chooseMonth()}</Text>
            </View>
        );
    }
}