import React from "react";
import { View } from "react-native";
import WelcomeBackground from "./WelcomeBackground";
import Button from "./Button";

const WelcomePage = props => {
    return (
        <WelcomeBackground>
            <View >
                <View style={{
                    height: 700, width: 380, borderTopLeftRadius: 100,
                    paddingTop: 100, alignItems: 'center'
                }}>
                    <Button textColor="orange" bgColor="rgb(220,220,220)" btnLabel="Add Candidate" Press={() =>
                        props?.navigation?.navigate("NewCandidate", {
                            userCredentials: props?.route?.params?.userCredential
                        })} />
                    <Button textColor="orange" bgColor="rgb(220,220,220)" btnLabel="Candidate List" Press={() =>
                        props?.navigation?.navigate("CandidateList", {
                            userCredentials: props?.route?.params?.userCredential
                        })} />
                </View>
            </View>
        </WelcomeBackground>
    );
};

export default WelcomePage;
