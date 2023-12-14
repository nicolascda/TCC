import React, { useState, useEffect,} from "react";
import { Text, View, StyleSheet } from "react-native";
import Temporizador from "../../components/Temporizador";
import CaixaTempo from "../../components/CaixaTempo";

export function Timer() {
    const [ tempo, definirTempo ] = useState(60)
    const [ entrada, definirEntrada ] = useState(null)

    useEffect(function(){
        const temporalizador = tempo > 0 && 
        setInterval(function() {
            definirTempo(tempo -1)
        }, 1000)
        return function() {
            clearInterval(temporalizador)
        }
    }, [tempo])

    return <View style={ styles.container }>
        <Temporizador tempo={tempo}/>

        <CaixaTempo
            entrada ={ entrada }
            definirEntrada = {definirEntrada}
            definirTempo = { definirTempo }
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#2A3340",
        flex: 1,
        justifyContent: "center",
    }
})