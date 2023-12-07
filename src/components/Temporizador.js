import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Temporizador(props) 
{
    return <View>
        <Text style={styles.tempoContagem}>{ props.tempo }</Text>
        <Text style={styles.tempoUnidade}> Segundos</Text>
    </View>
}

const styles = StyleSheet.create ({
    tempoContagem:{
        color: "#f1d968",
        fontSize: 64,
        textAlign: "center",
    },
    tempoUnidade: {
        color: "#c79452",
        fontSize: 24,
        marginBottom: 32,
        textAlign: "center",
    }
})