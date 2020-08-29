import React from "react";
import { View } from "react-native";

import { SportTypes } from "../../types";
import ChooseSport from "./steps/ChooseSport";
import AddPlayers from "./steps/AddPlayers";

type GameState = {
    step: number;
    game: {
        sport: SportTypes;
        players: number;
        location: {
            lat: string;
            lon: string;
        }
    }
}

export type StateUpdate = {
    key: "sport" | "players" | "location";
    value: SportTypes | number | { lat: string, lon: string };
}

export type UpdateProps = {
    step: 1 | -1;
    stateUpdate: StateUpdate;
}

export type StepProps = {
    value: SportTypes | number | { lat: string, lon: string };
    updateState: (s: UpdateProps) => void;
}

function NewGameSteps() {
    const [state, setState] = React.useState<GameState>({
        step: 1,
        game: {
            sport: "tennis",
            players: 1,
            location: {
                lat: "",
                lon: ""
            }
        }
    });

    const stepViews = React.useMemo<((p: StepProps) => JSX.Element)[]>(
        () => ([ChooseSport, AddPlayers]),
        []
    );

    const updateState = React.useCallback(({ step, stateUpdate }: UpdateProps) => {
        console.log(step, stateUpdate);

        setState(s => ({
            ...s,
            step: s.step + step,
            [stateUpdate.key]: stateUpdate.value
        }));
    }, []);

    const Step = stepViews[state.step - 1];
    const stepValKey = React.useMemo<Record<number, "sport" | "players" | "location">>(() => ({ 1: "sport", 2: "players" }), [])

    return (
        <View>
            {Step({ value: state.game[stepValKey[state.step]], updateState })}
        </View>
    );
}

export default NewGameSteps;
