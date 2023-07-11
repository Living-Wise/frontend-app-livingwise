import React from 'react';
import { View, Pressable, Text } from 'react-native';
import pressableStyles from './PressableStyle';

interface Props {
    title: string;
    btnColor: string;
}

function ButtonComponent(props: Props) {
    let btnColor = pressableStyles.button.primaryBtn;

    if (props.btnColor === 'secondary') {
        btnColor = pressableStyles.button.secondaryBtn
    }

    return (
        <View style={pressableStyles.shadowButton}>
            <Pressable style={[pressableStyles.button, btnColor]} onPress={() => console.log(props.btnColor)}>
                <Text style={pressableStyles.text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonComponent