import React from "react";
import { View } from "react-native";
import { ImageBackground } from "react-native";

const WelcomeBackground = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/gym_image.jpg")}
                style={{ height: '100%'}}
            />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
};

export default WelcomeBackground;
