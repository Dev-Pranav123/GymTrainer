import React, { useState } from "react";
import { View, TextInput } from "react-native";
import NeCandidateBackground from "./NeCandidateBackground";
import Button from "./Button";
import { getDatabase, ref, set } from "firebase/database";
import { showMessage } from "react-native-flash-message";

const NewCandidate = props => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);
    const [contactNumber, setContactNumber] = useState(null);
    const [feesPaid, setFeesPaid] = useState(null);
    const [dateOfJoining, setDateOfJoining] = useState(null);

    AddCandidate = (firstName, lastName, emailAddress, contactNumber, feesPaid, dateOfJoining) => {
        const db = getDatabase(); 
        set(ref(db, 'candidates/' + props?.route?.params?.userCredentials + contactNumber), {

            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            contactNumber: contactNumber,
            feesPaid: feesPaid,
            dateOfJoining: dateOfJoining
        });

        showMessage({
            message: "Candidate added successfully",
            description: "You can check the added candidate in the Candidate List",
            type: "success",
            position: "center",
            backgroundColor: "orange",
            animationDuration: 900
        });

        this.firstName.clear();
        this.lastName.clear();
        this.emailAddress.clear();
        this.contactNumber.clear();
        this.feesPaid.clear();
        this.dateOfJoining.clear();
    }
    return (
        <NeCandidateBackground>
            <View>
                <View style={{ alignItems: "center", width: 380, paddingTop: 10 }}>

                    <View style={{
                        height: 700, width: 380, borderTopLeftRadius: 100,
                        paddingTop: 20, alignItems: 'center'
                    }}>
                        <TextInput placeholder="First Name" style={{
                            borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                            width: '80%', backgroundColor: 'rgb(220,220,220)',
                            height: 45, marginVertical: 20
                        }} onChangeText={(firstName) => setFirstName(firstName)} ref={input => { this.firstName = input }} />
                        <TextInput placeholder="Last Name" style={{
                            borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                            width: '80%', backgroundColor: 'rgb(220,220,220)',
                            height: 45, marginVertical: 20
                        }} onChangeText={(lastName) => setLastName(lastName)} ref={input => { this.lastName = input }} />
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
                        <TextInput placeholder="Date Of Joining" style={{
                            borderRadius: 100, color: 'orange', paddingHorizontal: 10,
                            width: '80%', backgroundColor: 'rgb(220,220,220)',
                            height: 45, marginVertical: 20
                        }} onChangeText={(dateOfJoining) => setDateOfJoining(dateOfJoining)}
                            ref={input => { this.dateOfJoining = input }}
                        />
                        <Button textColor="orange" bgColor="rgb(220,220,220)" btnLabel="Add Candidate"
                            Press={() => {
                                AddCandidate(firstName, lastName, emailAddress, contactNumber, feesPaid, dateOfJoining)
                            }}
                        />
                    </View>
                </View>
            </View>
        </NeCandidateBackground>
    );
};

export default NewCandidate;
