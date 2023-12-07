import React, { useEffect, useState} from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import axios from 'axios';
import Card from "../../components/Card";

export function Pokepedia () 
{
     
    const [ data, definirData ] = useState(null)
    const [ typedName, definirTypedName ] = useState("")
    const [ name, definirName ] = useState("ditto")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/charizard")
                console.log(data.sprites.front_default)
                definirData(data)
            } catch (erro) {
                console.log('Erro ao obter dados:' , erro)
            }
        }

        fetchData();
    },[])   // o , [] serve para executar uma vez

    return <View style = {styles.container}>
        { data && data.sprites && (
            <Card data ={data}/>
        )}



    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd", 
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
        width: 200,
      },
})