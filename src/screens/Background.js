import React from "react";
import { ImageBackground } from "react-native";
import { View } from "react-native";

const Background = ({ children }) => {
    return (
        <View>
            <ImageBackground source={require("../../assets/gymequipment.jpg")}
                style={{ height: '100%' }}
            />
            <View style={{ position: 'absolute' }}>
                {children}
            </View>
        </View>
    );
};

export default Background;
