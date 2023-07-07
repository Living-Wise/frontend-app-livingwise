import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import TextInputComponent from "../TextInputComponent/TextInputComponent";


export default function LoginScreenComponent() {
    const [ email, setEmail] = useState("")
    return (
        <View>
            <Image source={require("../../../assets/logo.png")} 
            style={{ width: 280, height: 280 }} />
            <TextInputComponent placeholder="E-mail" value={email} setValue={setEmail} />
        </View>
    );
}