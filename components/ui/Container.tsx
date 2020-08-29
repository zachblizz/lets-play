import React from "react";
import { StyleSheet } from 'react-native';

import { View } from "../Themed";

export default function Container({ children, pad = true }: { children: JSX.Element, pad?: boolean }){
    return (
        <View style={[styles.container, pad && styles.padding]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    padding: {
        paddingHorizontal: 20
    }
});
