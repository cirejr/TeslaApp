import React from "react";
import {View, Text, ImageBackground, Pressable} from "react-native";
import styles from "./styles";

const StyledButton = (props) => {

    // => 1
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    // 1 == 2

    // => 2
    const {type, content, onPress} = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';

    return(
        <View style={styles.container}>
            <Pressable style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() =>onPress()}
            >
                <Text style={[styles.text, {color : textColor}]}>{content}</Text>

            </Pressable>


        </View>

    )
};

export default StyledButton;