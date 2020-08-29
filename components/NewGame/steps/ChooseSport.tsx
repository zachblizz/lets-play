import React from "react";
import { StyleSheet, Alert, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

import { SportTypes } from "../../../types";

import Layout from "../../../constants/Layout";

import { StepProps, StateUpdate } from "../NewGameSteps";

import Card from "../../ui/Card";
import Icon from "../../ui/Icon";
import Colors from "../../../constants/Colors";
import { mainStyles } from "../../Themed";

function ChooseSport({ value, updateState }: StepProps) {
    const sports = React.useMemo<SportTypes[]>(() => ([
        "tennis",
        "baseball",
        "football",
        "basketball",
        "soccer"
    ]), []);
    const [state, setState] = React.useState<StateUpdate>({ key: "sport", value });

    return (
        <View>
            <ScrollView style={styles.scrollView} horizontal>
                {sports.map((s: SportTypes) => (
                    <TouchableOpacity
                        key={s}
                        onPress={() => setState(st => ({ ...st, value: s }))}
                    >
                        <Card size="md" moreStyles={state.value === s && styles.selected}>
                            <>
                                <Icon name={s} size={60} />
                                <Text style={{ marginTop: 10, textTransform: "capitalize" }}>{s}</Text>
                            </>
                        </Card>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={mainStyles.inline}>
                <TouchableOpacity
                    style={styles.prevNext}
                    onPress={() => updateState({ step: 1, stateUpdate: state })}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width: Layout.window.layoutWidth,
        marginTop: 15,
        marginBottom: 5
    },
    selected: {
        borderColor: Colors.main,
        borderWidth: 3
    },
    prevNext: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 10
    }
});

export default ChooseSport;
