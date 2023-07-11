import React from "react";
import { View, TextInput } from "react-native";
import inputStyles from "./TextInputStyle";

interface Props {
    placeholder: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<any>>;
}

export default function TextInputComponent(props: Props) {
    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                style={inputStyles.input}
                value={props.value}
                onChangeText={props.setValue}
            />
        </View>
    );
}