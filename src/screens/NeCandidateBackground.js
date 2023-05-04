import React from "react";
import { View } from "react-native";
import { ImageBackground } from "react-native";

const NeCandidateBackground = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/CandidateBackground.jpg")}
                style={{ height: '100%' }}
            />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
};

export default NeCandidateBackground;
