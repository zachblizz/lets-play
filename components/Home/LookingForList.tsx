import React from "react";
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, RefreshControl, View, Text, Alert } from 'react-native';

import Card from "../ui/Card";
import Icon from "../ui/Icon";

import formatDate from '../../utils/formatDate';

import { LookingFor } from "../../types";

function LookingForList() {
    const [loading, setLoading] = React.useState(false);
    const currentlyLooking = React.useMemo<LookingFor[]>(() => ([
        { sport: "tennis", howMany: 2, parkName: "leonard park", timeStamp: new Date().setDate(new Date().getHours() - 1) },
        { sport: "tennis", howMany: 1, parkName: "cimmaran park", timeStamp: new Date().setDate(new Date().getHours() - 0.5) },
        { sport: "soccer", howMany: 5, parkName: "lewisville HS", timeStamp: new Date().setDate(new Date().getHours() - 0.25) },
        { sport: "soccer", howMany: 1, parkName: "lewisville HS", timeStamp: new Date().setDate(new Date().getHours() - 0.25) },
        { sport: "football", howMany: 3, parkName: "lewisville HS", timeStamp: new Date().setDate(new Date().getHours() - 0.25) },
        { sport: "basketball", howMany: 2, parkName: "lewisville HS", timeStamp: new Date().setDate(new Date().getHours() - 0.25) },
        { sport: "baseball", howMany: 5, parkName: "lewisville HS", timeStamp: new Date().setDate(new Date().getHours() - 0.25) },
    ]), []);

    const triggerRefresh = React.useCallback(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 3000);
    }, []);

    return (
        <FlatList
            style={{ height: 335, marginBottom: 10 }}
            data={currentlyLooking}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    onRefresh={triggerRefresh}
                />
            }
            keyExtractor={item => `${item.sport}-${item.parkName}-${item.howMany}`}
            renderItem={({ item, index }) => (
                <TouchableOpacity key={`${item}-${index}`} onPress={() => Alert.alert(item.sport)}>
                    <Card size="md" full>
                        <View style={styles.cardViewContainer}>
                            <Icon name={item.sport} size={60} />
                            <View style={{ display: "flex", flexDirection: "row" }}>
                                <Text>Looking for {item.howMany}</Text>
                                <Text style={{ textTransform: "capitalize" }}>{item.parkName}</Text>
                                <Text style={{ position: "absolute", right: 10, top: 10 }}>{formatDate(item.timeStamp)}</Text>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    cardViewContainer: {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        justifyContent: "flex-start"
    }
});

export default LookingForList;
