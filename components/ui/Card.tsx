import React from "react";
import { StyleSheet, View } from "react-native";

import Layout from "../../constants/Layout";

type Sizes = "sm" | "md" | "lg";
type Props = {
    size: Sizes;
    children: JSX.Element;
    full?: boolean;
    moreStyles?: any;
}

type Size = Record<"width" | "height", number>;

function Card({ size, full, children, moreStyles }: Props) {
    const fullWidth = React.useMemo(() => Layout.window.layoutWidth, []);
    const sizes = React.useMemo<Record<Sizes, Size>>(() => ({
        "sm": { width: full ? fullWidth : 90, height: 90 },
        "md": { width: full ? fullWidth : 150, height: 150 },
        "lg": { width: full ? fullWidth : 250, height: 250 }
    }), []);

    return (
        <View style={[styles.container, sizes[size], moreStyles]}>
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
        marginHorizontal: 3,
        marginVertical: 5,
        borderRadius: 10,
        borderColor: "#eee",
        borderWidth: 1,
    }
})

export default Card;
