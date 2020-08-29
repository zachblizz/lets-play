import React from "react";
import { StyleSheet, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Text, View, mainStyles } from "../Themed";
import Colors from "../../constants/Colors";

import LeftChevron from "../../assets/icons/left-chevron.svg";

type Types = "primary" | "secondary";

type Props = {
    onPress: () => void;
    text: string;
    type?: Types;
};

export function Button({ type = "primary", onPress, text }: Props) {
    const themedStyles = styles[type];

    return (
        <TouchableOpacity style={themedStyles.button} onPress={onPress}>
            <Text style={themedStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

export function BackButton({ navigation, route, ...props }: any) {
    if (Platform.OS !== "ios") {
        return <></>;
    }

    const goBack = React.useCallback(() => {
        if (route) {
            navigation.navigate(route);
        } else {
            navigation.goBack();
        }
    }, [route, navigation]);

    return (
        <View style={backStyles.backContainer}>
            <TouchableOpacity onPress={goBack}>
                <View style={mainStyles.inline}>
                    <LeftChevron {...props} />
                    <Text style={backStyles.backTxt}>go back</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const commonStyles = {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 3,
};

const primaryStyles = StyleSheet.create({
    button: {
        ...commonStyles,
        backgroundColor: Colors.main,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.white,
        textTransform: "capitalize",
    },
});

const secondaryStyles = StyleSheet.create({
    button: {
        ...commonStyles,
        backgroundColor: Colors.white,
        borderColor: Colors.silver,
        borderWidth: 1
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.mako,
        textTransform: "capitalize",
    }
});

// @ts-ignore next-line
const styles: Record<Types, ReturnType<typeof StyleSheet>> = {
    "primary": primaryStyles,
    "secondary": secondaryStyles
}

const backStyles = StyleSheet.create({
    backContainer: {
        justifyContent: "flex-start",
        marginTop: 45,
        marginBottom: 10,
    },
    backTxt: {
        color: Colors.main,
        textTransform: "capitalize"
    }
});