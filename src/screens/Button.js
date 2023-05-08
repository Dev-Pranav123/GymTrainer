import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function Button({ bgColor, btnLabel, textColor, Press, disabledButton }) {
    return (
        <View>
            <TouchableOpacity
            disabled = {disabledButton}
                onPress={Press}
                style={{
                    backgroundColor: bgColor,
                    borderRadius: 100,
                    alignItems: 'center',
                    width: 320,
                    height: 45,
                    marginVertical: 10
                }}>
                <Text style={{ color: textColor, fontSize: 29, fontWeight: 'bold' }}>{btnLabel} </Text>
            </TouchableOpacity>
        </View>
    );
};
 

