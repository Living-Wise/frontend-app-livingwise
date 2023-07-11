import React, { useState } from "react";
import { Text, View, Image } from "react-native";
import TextInputComponent from "../TextInputComponent/TextInputComponent";


export default function LoginScreenComponent() {
    const [email, setEmail] = useState("")
    return (
        <View>
            <Image
                source={require("../../../assets/logo.png")}
                style={{
                    width: 260,
                    height: 260,
                    alignSelf: 'center'
                }}
            />
            <TextInputComponent
                placeholder="E-mail"
                value={email}
                setValue={setEmail}
            />
        </View>
    );
}