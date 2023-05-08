import React, { useState } from "react";
import { View, TextInput, ImageBackground, ScrollView, Text, TouchableOpacity } from "react-native";
import Button from "./Button";
import { getDatabase, ref, set } from "firebase/database";
import { showMessage } from "react-native-flash-message";

const NewCandidate = props => {
    console.log(props, '+++++');
    const [candidateName, setCandidateName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);
    const [contactNumber, setContactNumber] = useState(null);
    const [feesPaid, setFeesPaid] = useState(null);
    const [dateOfJoining, setDateOfJoining] = useState(null);
    const [timeSlot, setTimeSlot] = useState(null);

    AddCandidate = (candidateName, emailAddress, contactNumber, feesPaid, dateOfJoining, timeSlot) => {
        const db = getDatabase();
        set(ref(db, 'candidates/' + props?.route?.params?.userCredentials + contactNumber), {

            candidateName: candidateName,
            emailAddress: emailAddress,
            contactNumber: contactNumber,
            feesPaid: feesPaid,
            dateOfJoining: dateOfJoining,
            timeSlot: timeSlot
        });

        showMessage({
            message: "Candidate added successfully",
            description: "You can check the added candidate in the Candidate List",
            type: "success",
            position: "center",
            backgroundColor: "orange",
            animationDuration: 900
        });

        this.candidateName.clear();
        this.emailAddress.clear();
        this.contactNumber.clear();
        this.feesPaid.clear();
        this.dateOfJoining.clear();
        this.timeSlot.clear();
    }
    return (
        <View>
            <ScrollView>
                <ImageBackground source={require("../../assets/CandidateBackground.jpg")}
                    style={{ height: '100%' }}
                >
                    <View style={{ alignItems: "center", width: 380, paddingTop: 10 }}>

                        <View style={{
                            height: 700, width: 380, borderTopLeftRadius: 100,
                            paddingTop: 20, alignItems: 'center'
                        }}>
                            <TextInput placeholder="Candidate  Name" style={{
                                borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                                width: '80%', backgroundColor: 'rgb(220,220,220)',
                                height: 45, marginVertical: 20
                            }} onChangeText={(candidateName) => setCandidateName(candidateName)} ref={input => { this.candidateName = input }} />
                            <TextInput placeholder="Email address" style={{
                                borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                                width: '80%', backgroundColor: 'rgb(220,220,220)',
                                height: 45, marginVertical: 20
                            }} keyboardType={"email-address"} onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                                ref={input => { this.emailAddress = input }} />
                            <TextInput placeholder="Contact Number" style={{
                                borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                                width: '80%', backgroundColor: 'rgb(220,220,220)',
                                height: 45, marginVertical: 20
                            }} keyboardType={"numeric"} onChangeText={(contactNumber) => setContactNumber(contactNumber)}
                                ref={input => { this.contactNumber = input }} />
                            <TextInput placeholder="Fees Paid" style={{
                                borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                                width: '80%', backgroundColor: 'rgb(220,220,220)',
                                height: 45, marginVertical: 20
                            }} keyboardType={"numeric"} onChangeText={(feesPaid) => setFeesPaid(feesPaid)}
                                ref={input => { this.feesPaid = input }}
                            />
                            <TextInput placeholder="Time Slot" style={{
                                borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                                width: '80%', backgroundColor: 'rgb(220,220,220)',
                                height: 45, marginVertical: 20
                            }} onChangeText={(timeSlot) => setTimeSlot(timeSlot)}
                                ref={input => { this.timeSlot = input }}
                            />
                            <TextInput placeholder="Date Of Joining" style={{
                                borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                                width: '80%', backgroundColor: 'rgb(220,220,220)',
                                height: 45, marginVertical: 20
                            }} onChangeText={(dateOfJoining) => setDateOfJoining(dateOfJoining)}
                                ref={input => { this.dateOfJoining = input }}
                            />
                            <Button textColor="black" bgColor="orange" btnLabel="Add Candidate"
                                disabledButton={contactNumber === null}
                                Press={() => {
                                    AddCandidate(candidateName, emailAddress, contactNumber, feesPaid, dateOfJoining, timeSlot)
                                }}
                            />
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: 'white', fontSize: 15 }}>View list of candidates </Text>
                                <TouchableOpacity onPress={() => props.navigation.navigate("CandidateList", {
                                    userCredentials: props?.route?.params?.userCredentials
                                })}><Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 15 }}>Candidate List</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </View>
    );
};

export default NewCandidate;
