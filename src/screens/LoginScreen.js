
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Background from './Background';
import Button from './Button';
import { grey, yellow } from './Constants';

const LoginScreen = (props) => {
    return (
        <Background>
            <View style={{ marginHorizontal: 20, marginVertical: 50 }}>
                <Text style={{ color: '#FFFFFF', fontSize: 56, marginBottom: 40, marginTop: 40 }}>Let's make exercise as a daily routine</Text>
                <Button bgColor={yellow} textColor='black' btnLabel="Login Page" Press={() => props.navigation.navigate("LoginPage")} />
                <Button bgColor={grey} textColor='black' btnLabel="Sign up" Press={() => props.navigation.navigate("SignupPage")} />
            </View>
        </Background>
    )
}

export default LoginScreen