import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { BackButton } from "../components/ui/Button";

import { mainStyles } from "../components/Themed";
import Layout from "../constants/Layout";
import NewGameSteps from "../components/NewGame/NewGameSteps";


function NewFinding({ navigation }: any) {
    return (
        <View style={[mainStyles.container, styles.container]}>
            <BackButton navigation={navigation} />
            <Text>Lets look for some teammates!</Text>
            <NewGameSteps />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: Layout.window.layoutWidth,
        height: Layout.window.height,
    },
});

export default NewFinding;
