import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function New({ navigation }: any) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.push("NewFinding")}>
                <Text style={styles.content}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        width: 60,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60 / 2,
        position: "absolute",
        bottom: 10,
        right: 10,
        backgroundColor: "#ffbb00",
    },
    content: {
        color: "#fff",
        fontSize: 40
    }
})

export default New;
