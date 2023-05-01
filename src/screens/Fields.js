import React from "react";
import { TextInput } from "react-native";

const Fields = (props) => {
    return (
        <TextInput {...props} style={{
            borderRadius: 100, color: 'orange', paddingHorizontal: 10,
            width: '80%', backgroundColor: 'rgb(220,220,220)',
            height: 45, marginVertical: 20
        }}>

        </TextInput>
    );
};

export default Fields;
