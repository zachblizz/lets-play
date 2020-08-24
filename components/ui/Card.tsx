import React from "react";
import { StyleSheet, View } from "react-native";

import Layout from "../../constants/Layout";

type Sizes = "sm" | "md" | "lg";
type Props = {
    size: Sizes;
    children: JSX.Element;
    full?: boolean;
}

type Size = Record<"width" | "height", number>;

function Card({ size, full, children }: Props) {
    const fullWidth = React.useMemo(() => Layout.window.layoutWidth, []);
    const sizes = React.useMemo<Record<Sizes, Size>>(() => ({
        "sm": { width: full ? fullWidth : 90, height: 90 },
        "md": { width: full ? fullWidth : 150, height: 150 },
        "lg": { width: full ? fullWidth : 250, height: 250 }
    }), []);

    return (
        <View style={[styles.container, sizes[size]]}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 4,
        borderColor: "#eee",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.12,
        shadowRadius: 2.22,

        elevation: 3,
    }
})

export default Card;
