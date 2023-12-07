import React from "react";
import { View, TextInput, Pressable, Image, StyleSheet } from "react-native";

export default function CaixaTempo(props)
{
    return <View style={ styles.tempoCaixa}>
        <TextInput 
        style={ styles.tempoEntrada}
            keyboardType="number-pad"
            maxLength = { 3 }
            placeholder="120s"
            value={ props.entrada }
            onChangeText={ props.definirEntrada}

        />

        <Pressable
            onPress={ () => props.definirTempo( props.entrada > 0 ? props.entrada : 60 )}
        >
            <View style={ styles.tempoBotao}>
                <Image 
                    source={{ uri:"https://i.ibb.co/LtggQ4L/icone.png" }}
                    style= {{height: 32, width: 32}}
                />
            </View>

        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    tempoCaixa: {
        flexDirection: "row",
    },
    tempoEntrada: {
        backgroundColor: "#1C2229",
        color: "#c79452",
        fontSize: 24,
        height: 48,
        textAlign: "center",
        width: 128,
    },
    tempoBotao: {
        alignItems: "center",
        backgroundColor: "#1c2229",
        justifyContent: "center",
        height: 48,
        textAlign: "center",
    },
    tempoBotaoTexto: {
         color: "#c79452",
         fontSize: 24,
    }
})