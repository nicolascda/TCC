import React, { useState, useEffect } from "react";
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import axios from 'axios';

export default function Cardfavorito(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const {data} = await axios.get("http://pokeapi.co/api/v2/pokemon/"+ props.name.value);

                console.log(data.sprites.front_default)
                setData(data);
            } catch (error) {
              console.log(error)

            }
          };
      
          fetchData();
    },[])

    return  <View>
                {data && data.sprites && (
                    <>
                      <View style={styles.card}>
                          <Image
                              source={{ uri: data.sprites.front_default}}

                              style={styles.cardImage}
                          />
                          <View style={styles.cardMid}>
                              
                              <Text>{data.name.toUpperCase()}</Text>
                          </View>
                        </View>
                    </>
                )}
                
            </View>
}

const styles = StyleSheet.create({
    card: {
      width: 345,
      height: 250, // largura desejada do cartão
      borderWidth: 1,
      borderColor: '#000',
      borderRadius: 8,
      borderWidth: 10,
      overflow: 'hidden',
      margin: 10,
      alignItems: 'center',
      backgroundColor:"#C3DAFF",
    },
    cardImage: {
      width: '100%',
      height: 200, // altura desejada da imagem
      
    },

    cardMid: {
        justifyContent: 'center',
    },
  
  });