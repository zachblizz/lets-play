import React from "react";
import { StyleSheet, Dimensions, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Layout from "../constants/Layout";

function Header() {
    return (
        <LinearGradient
            colors={['#ffaa00', '#ffcc00']}
            style={styles.container}
        >
            <Text style={{color: "#fff"}}>somethin ghere</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginTop: -110,
        height: Layout.window.width,
        width: Layout.window.width,
        alignContent: "center",
        justifyContent: "center",
        borderRadius: (Dimensions.get("screen").width) / 2,
        transform: [{ scaleX: 2 }]
    }
});

export default Header;
