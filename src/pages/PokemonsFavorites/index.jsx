import { View, StyleSheet, FlatList, TextInput, Button} from "react-native";
import React, { useState } from 'react';
import Cardfavorito from "../../components/Cardfavorito";

export function Favorites(){
    const [favorites, definirFavorites] = useState([{id:"1",value:"pikachu"}, {id:"2",value:"eevee"}])

    const [novoFavorito,  definirNovoFavorito] = useState('');

    function handleInputChange(text) {
        definirNovoFavorito(text.toLowerCase());
    }

    function handleAddItem() {
        if (novoFavorito.trim() !== '') {
          const newItem = {
            id: (favorites.length + 1).toString(),
            value: novoFavorito,
          };
    
          definirFavorites([...favorites, newItem]);
          definirNovoFavorito(''); // Limpa o valor do input após adicionar o item
        }
      };

    return(
        <View style={styles.container}>
            <TextInput
                placeholder="Novo Item"
                value={novoFavorito}
                onChangeText={handleInputChange}
                style = {styles.input}
            />

            <Button title="Adicionar Item" onPress={handleAddItem} />

            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Cardfavorito name={item} />}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
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