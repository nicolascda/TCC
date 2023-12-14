import React, { useState } from "react";
import { View, StyleSheet, Image, Text, Button } from "react-native";

export default function Card(props) {
    const { sprites, name, stats } = props.data

    const [ shiny, definirShiny ] = useState(false)

    function tradeShiny(){
        definirShiny(!shiny)
    }

    return <View style={styles.card}>
        <Image
            source={{ uri: shiny == false ? sprites.front_default : sprites.front_shiny }}
            style = {styles.cardImage}
        />

        <View style = {styles.cardMid}>
            <Text> { name.toUpperCase() } </Text>
            <Button title={shiny == false ? "Ver Shiny" : "Ver Normal"} onPress={tradeShiny}/>
        </View>

        <View style = {styles.cardBody}>
            <View style = {styles.cardTextField}>
                <Text style = {styles.cardTextBold}> HP</Text>
                <Text> { stats[0].base_stat} </Text>
            </View>

            <View style = {styles.cardTextField}>
                <Text style = {styles.cardTextBold}> ATTACK</Text>
                <Text> { stats[1].base_stat} </Text>
            </View>

            <View style = {styles.cardTextField}>
                <Text style = {styles.cardTextBold}> DEFENSE</Text>
                <Text> { stats[2].base_stat} </Text>
            </View>

            <View style = {styles.cardTextField}>
                <Text style = {styles.cardTextBold}> SPECIALATTACK</Text>
                <Text> { stats[3].base_stat} </Text>
            </View>

            <View style = {styles.cardTextField}>
                <Text style = {styles.cardTextBold}> SPECIALDEFENSE</Text>
                <Text> { stats[4].base_stat} </Text>
            </View>

            <View style = {styles.cardTextField}>
                <Text style = {styles.cardTextBold}> SPEED</Text>
                <Text> { stats[5].base_stat} </Text>
            </View>

        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
      width: 350,
      height: 500, // largura desejada do cartão
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 8,
      overflow: 'hidden',
      margin: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor:"#ddd"
    },
    cardImage: {
      width: '100%',
      height: 250, // altura desejada da imagem
      
    },

    cardMid: {
        justifyContent: 'center',
      alignItems: 'center',
    },
    cardBody: {
      padding: 20,
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 8,
      fontSize: 16,
      flexDirection: "column",
      width:"100%",
      gap: 5,
 
    },
   
    cardTextField:{
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    cardTextBold: {
        fontWeight: 'bold',
    }
});