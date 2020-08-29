import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { StateUpdate, StepProps } from "../NewGameSteps";
import { mainStyles } from "../../Themed";

function AddPlayers({ value, updateState }: StepProps) {
    const [state, setState] = React.useState<StateUpdate>({ key: "players", value });

    return (
        <View style={mainStyles.container}>
            <Text>
                {state.value}
                <TouchableOpacity
                    onPress={() => updateState({ step: -1, stateUpdate: state })}
                >
                    <Text>Prev</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => updateState({ step: 1, stateUpdate: state })}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </Text>
        </View>
    );
}

export default AddPlayers;
