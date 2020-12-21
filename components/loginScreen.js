import * as React from 'react';
import { Pressable, Text, View, TextInput, Switch } from 'react-native';
import { styles } from '../utils/styles';
import { Ionicons } from '@expo/vector-icons';

class loginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            adminMode: false,
            checked: false,
        }
    }

    handleLogin() {
        ///Login handelen en informatie opsturen en checken tegen AWS
        try {
            let username = this.state.username
            let password = this.state.password

            // Hier moet AWS shit gebeuren

            this.handleNavigation()
            console.log('Login Succesfull')

        } catch(error) {
            alert('Fout bij Login')
        }
    }

    handleSignUp() {
        ///Sign up handelen en informatie opsturen en checken tegen AWS, vervolgens inloggen.
        try {
            let username = this.state.username
            let password = this.state.password

            // Hier meot AWS shit gebeuren

            this.handleNavigation()
            console.log('Sign Up succesfull')

        } catch(error) {
            alert('Fout bij Sign Up')
        }
    }

    handleNavigation() {
        if (this.state.adminMode == true) {
            this.props.navigation.navigate('adminStack', {screen: 'Home'})
        } else {
            this.props.navigation.navigate('userStack', {screen: 'Home'})
        }
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fafafa', alignItems: 'center'}}>
                <View style={{flex: 3, justifyContent: 'center',}}>
                    <Ionicons name='ios-person-circle-outline' size={125} style={{color: '#89cff0'}}/>
                </View>
                <View style={{flex: 5, alignItems: 'center'}}>
                    <View style={styles.textInputView}>
                        <Ionicons name='person-outline' size={25} style={{marginRight: 10}}/>
                        <TextInput
                            placeholder = 'Username'
                            style={styles.loginInput}
                            onChangeText = {(text) => this.setState({text})}
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <Ionicons name='key-outline' size={25} style={{marginRight: 10}}/>
                        <TextInput
                            placeholder = 'Password'
                            style={styles.loginInput}
                            onChangeText = {(text) => this.setState({text})}
                            secureTextEntry = {true}
                        />
                    </View>
                    <Pressable onPress={() => {alert('sukkel')}}>
                        <Text style={{textAlign: 'center', color: '#89cff0', padding: 5, fontSize: 15}}>Forgot password?</Text>
                    </Pressable>
                </View>
                <View style={{flex: 3, alignItems: 'center',}}>
                    <Pressable 
                        style={styles.button}
                        onPress={() => 
                        this.handleLogin()
                        }
                    >
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </Pressable>
                    <Pressable 
                        style={styles.button}
                        onPress={() => 
                        this.handleSignUp()
                        }
                    >
                        <Text style={styles.buttonText}>
                            Sign Up
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