import React, { useEffect, useState} from "react";
import { View, StyleSheet, Text, Button, TextInput, Alert, KeyboardAvoidingView } from "react-native";
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
                const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
                console.log(data.sprites.front_default)
                definirData(data)
            } catch (erro) {
                console.log('Erro ao obter dados:' , erro)
                Alert.alert(
                    "Pokemon não encontrado",
                    "Verifique o nome escrito",
                    [
                        {text: "OK"} // para criar um botão
                    ],
                    { cancelable: false }
                    )
            }
        }

        fetchData();
    },[name])   // o , [] serve para executar uma vez

    function pesquisaPokemon() {
        definirName(typedName.toLowerCase())
    }

    return <KeyboardAvoidingView style = {styles.container}
        behavior={"padding"}
    >

        { data && data.sprites && (
            <Card data ={data}/>
        )}

        <TextInput
            style={styles.input}
            placeholder="Digite o nome do Pokemon"
            value={typedName}
            onChangeText={ (text) => definirTypedName(text)}
        />

        <Button title="Pesquisar" onPress={pesquisaPokemon} color={"grey"}/>

    </KeyboardAvoidingView>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C0C3C8", 
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