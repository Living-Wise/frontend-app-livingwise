import React from 'react';
import { View, Pressable, Text, Image } from 'react-native';
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
            <Pressable
                style={[pressableStyles.button, btnColor]}
                onPress={() => console.log(props.btnColor)}
            >
                <View>
                    {
                        props.btnColor === 'secondary' ?
                            <View style={pressableStyles.img}>
                                <Image
                                    source={require("../../../assets/google_icon.png")}
                                    style={{
                                        width: 62,
                                        height: 62,
                                        alignSelf: 'center'
                                    }}
                                />
                            </View>
                            :
                            null
                    }
                </View>
                <Text style={pressableStyles.text}>{props.title}</Text>
            </Pressable>

        </View>
    )
}

export default ButtonComponent