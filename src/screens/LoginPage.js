import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Background from "./Background";
import Button from "./Button";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase.config"


const LoginPage = props => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const login = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                props.navigation.navigate("WelcomePage", {
                    userCredential: userCredential.user.uid
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    }

    const resetPassword = (email) => {
        if (email != null) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert("Password reset email has been sent successfully!!!");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    alert(errorMessage);
                });
        }
        else {
            alert("Please enter a valid email");
        }
    }
    return (
        <Background>
            <View style={{ alignItems: "center", width: 380, paddingTop: 50 }}>
                <Text style={{ color: "yellow", fontSize: 50, fontWeight: "bold" }}>Login</Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 380, borderTopLeftRadius: 100,
                    paddingTop: 100, alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 40, fontWeight: "bold", color: "orange" }}>Welcome back</Text>
                    <Text style={{ color: 'grey', fontSize: 19, fontWeight: 'bold', marginBottom: 20 }}>Login to your account</Text>


                    <TextInput placeholder="Email / User Name" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} keyboardType={"email-address"}
                        onChangeText={(email) => setEmail(email)}
                    />

                    <TextInput placeholder="Password" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} onChangeText={(password) => setPassword(password)} />


                    <View style={{ alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 120 }}>
                        <TouchableOpacity
                            onPress={() => resetPassword(email)}><Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 16 }}>Forgot Password?</Text></TouchableOpacity>
                    </View>
                    <Button textColor="orange" bgColor="rgb(220,220,220)" btnLabel="Login" Press={() =>
                        login()} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>Dont have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignupPage")}><Text style={{ color: 'orange', fontWeight: 'bold' }}>Signup</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default LoginPage;
