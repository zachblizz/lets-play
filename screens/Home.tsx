import * as React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Card from "../components/ui/Card";
import Icon from "../components/ui/Icon";
import Header from "../components/Header";


import { SportTypes } from '../types';
import LookingForList from '../components/Home/LookingForList';
import Layout from '../constants/Layout';

export default function Home() {
    const sports = React.useMemo<SportTypes[]>(() => ([
        "tennis",
        "baseball",
        "football",
        "basketball",
        "soccer"
    ]), []);


    return (
        <View style={styles.container}>
            <Header></Header>
            <ScrollView style={styles.scrollView} horizontal>
                {sports.map(s => (
                    <TouchableOpacity key={s} onPress={() => Alert.alert(s)}>
                        <Card size="sm">
                            <>
                                <Icon name={s} />
                                <Text style={{ marginTop: 10, textTransform: "capitalize" }}>{s}</Text>
                            </>
                        </Card>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <LookingForList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 10
    },
    scrollView: {
        width: Layout.window.layoutWidth,
        marginTop: 15,
        marginBottom: 5
    }
});
