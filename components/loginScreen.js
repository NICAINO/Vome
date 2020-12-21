import * as React from 'react';
import { Pressable, Text, View, TextInput, Switch } from 'react-native';
import { styles } from '../utils/styles';
import { LinearGradient } from 'expo-linear-gradient';

class loginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            adminMode: false,
        }
    }

    handleNavigation() {
        if (this.state.adminMode == true) {
            this.props.navigation.navigate('adminStack', {screen: 'homeScreen'})
        } else {
            this.props.navigation.navigate('userStack', {screen: 'homeScreen'})
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fafafa'}}>
                <View style={{flex: 3, justifyContent: 'center',}}>
                    <Text style={{fontSize: 50, color: '#89cff0', textAlign: 'center', fontWeight: 'bold',}}>
                        Login
                    </Text>
                </View>
                <View style={{flex: 5, alignItems: 'center'}}>
                    <TextInput
                        placeholder = 'Username'
                        style={styles.loginInput}
                        onChangeText = {(text) => this.setState({text})}
                    />
                    <TextInput
                        placeholder = 'Password'
                        style={styles.loginInput}
                        onChangeText = {(text) => this.setState({text})}
                        secureTextEntry = {true}
                    />
                </View>
                <View style={{flex: 3, alignItems: 'center',}}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => 
                        this.handleNavigation()
                        // this.props.navigation.navigate('userStack', {screen: "homeScreen"})
                        }
                    >
                        <Text style={styles.buttonText}>
                            LOL
                        </Text>
                    </Pressable>
                    <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>
                            Admin
                        </Text>
                        <Switch
                            style={{marginLeft: 10}}
                            value={this.state.adminMode}
                            onValueChange={(adminMode)=>this.setState({adminMode})}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default loginScreen