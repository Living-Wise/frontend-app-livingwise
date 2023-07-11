import React, { useState } from "react";
import { View, Image } from "react-native";
import TextInputComponent from "./TextInputComponent/TextInputComponent";
import metrics from "../styles/metrics";

interface Value {
    email: string,
    senha: string,
};

type RequiredValue = Required<Value>;

export default function LoginScreenComponent() {
    const [value, setValue] = useState<RequiredValue>({} as RequiredValue);

    return (
        <View>
            <Image
                source={require("../../assets/logo.png")}
                style={{
                    width: 260,
                    height: 200,
                    alignSelf: 'center'
                }}
            />
            <View style={{ marginVertical: metrics.mediumMargin }}>
                <TextInputComponent
                    placeholder="E-mail"
                    value={value?.email}
                    setValue={setValue}
                />
                <TextInputComponent
                    placeholder="Senha"
                    value={value?.senha}
                    setValue={setValue}
                />
            </View>
        </View>
    );
}