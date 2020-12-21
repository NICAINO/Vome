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