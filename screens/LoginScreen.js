import React, {Component } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

const IOS_CLIENT_ID = '872509857984-6vtqndded3e1dot20un6otbo7gfppi6g.apps.googleusercontent.com';

export default class LoginScreen extends Component {
    signInWithGoogle = async () => {
        try {
            const result = await Google.logInAsync ({
                iosClientId: IOS_CLIENT_ID,
                success: ['profile', 'email']
            })
            if(result.type === 'success') {
                console.log('LoginScreen.js', result.user.giveName);
                props.navigation.navigate('Profile', {
                    username: result.user.giveName
                })
                return result.accessToken;
            } else {
                return {cancelled: true};
            }
        } catch (err){
            console.log('LoginScreen', err);
            return {error: true}
        }
    } 
    render() {
        return(
            <View style={styles.container}>
                <Button title="Login with Google" onPress={this.signInWithGoogle}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent: 'center', 
   }
})