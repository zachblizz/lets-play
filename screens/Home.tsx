import * as React from 'react';
import { View } from 'react-native';
import Header from "../components/Header";
import LookingForList from '../components/Home/LookingForList';
import New from '../components/New';
import { mainStyles } from '../components/Themed';

export default function Home(props: any) {
    return (
        <View style={mainStyles.container}>
            <Header></Header>
            <LookingForList />
            <New {...props} />
        </View>
    );
}
