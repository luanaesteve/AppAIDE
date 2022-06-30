import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import LoginForm from "./UI/Components/form";

export default function App(){
    return(
        <View style={styles.container}>
            <Text>hola</Text>
            <Text>jajaj</Text>
            <LoginForm/>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
