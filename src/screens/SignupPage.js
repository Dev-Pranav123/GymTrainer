import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Background from "./Background";
import Fields from "./Fields";
import Button from "./Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { getDatabase, ref, set } from "firebase/database";



const SignupPage = props => {
    const database = getDatabase();
    constructor(props)
    {

        this.state = {
            firstName: 'Pranav1234656',
            lastName: 'Kelkar',
            contactNumber: '1234561234'
        }
    }
    Insert = () => {
        const db = getDatabase();
        set(ref(db, 'users/' + this.state.contactNumber), {

            firstName: this.state.firstName,
            lastName: this.state.lastName,
        });
    }


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const signup = () => {
        createUserWithEmailAndPassword(auth, 'prahsnat@gmail.com', '123465')
            .then((userCredential) => {
                // Signed in 
                alert("User created successfully");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(error.message);
                // ..
            });
    }

    return (
        <Background>
            <View style={{ alignItems: "center", width: 380, paddingTop: 10 }}>
                <Text style={{ color: "yellow", fontSize: 35, fontWeight: "bold", marginTop: 20 }}>Register</Text>
                <Text style={{ color: 'orange', fontSize: 16, marginBottom: 5, fontWeight: "bold", marginTop: 5 }}>Create a new account</Text>
                <View style={{
                    backgroundColor: "white", height: 700, width: 380, borderTopLeftRadius: 100,
                    paddingTop: 20, alignItems: 'center'
                }}>
                    <TextInput placeholder="First Name" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} />
                    <TextInput placeholder="Last Name" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} />
                    <TextInput placeholder="Email address" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} keyboardType={"email-address"} />
                    <TextInput placeholder="Contact Number" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} keyboardType={"numeric"} />
                    <TextInput placeholder="Password" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} secureTextEntry={true} />
                    <TextInput placeholder="Confirm Password" style={{
                        borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                        width: '80%', backgroundColor: 'rgb(220,220,220)',
                        height: 45, marginVertical: 20
                    }} secureTextEntry={true} />

                    <View style={{ display: 'flex', flexDirection: 'row', width: '78%', paddingRight: 16 }}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 13 }}>By Signing in you agree to our</Text>
                        <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 13 }}> Terms & Conditions</Text>
                    </View>
                    <Button textColor="orange" bgColor="rgb(220,220,220)" btnLabel="Signup" Press={() => {
                        Insert()
                        props.navigation.navigate("LoginPage")
                    }} />
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Text>Already have an account ? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("LoginPage")}><Text style={{ color: 'orange', fontWeight: 'bold' }}>Login</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </Background>
    );
};

export default SignupPage;
