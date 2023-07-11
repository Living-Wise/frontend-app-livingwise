import React from 'react';
import { View, Pressable, Text } from 'react-native';
import pressableStyles from './PressableStyle';

interface Props {
    title: string;
}

function ButtonComponent(props: Props) {
    return (
        <View style={pressableStyles.shadowButton}>
            <Pressable style={pressableStyles.button}>
                <Text style={pressableStyles.text}>{props.title}</Text>
            </Pressable>
        </View>
    )
}

export default ButtonComponent