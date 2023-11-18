import { View, StyleSheet, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location"
import React, {useEffect, useState } from "react";

export function Map() {

    const [ localizacao, definirlocalizacao ] = useState({})

    useEffect(function() {
        async function ObterLocalizacao() {
            await Location.requestForegroundPermissionsAsync()

            definirlocalizacao(await Location.getCurrentPositionAsync({}))
        }

        ObterLocalizacao()
    }, [])


    return(
        <View style={styles.container}>
            { Object.keys(localizacao).length > 0 &&
                <>
                    <View style= { styles.indicador}>
                        <Text style={ styles.indicadorText}>  EXPLORAR NOVOS MUNDOS </Text>
                        <Text style={ styles.indicadorText}> Latitude: {localizacao.coords.latitude } </Text>
                        <Text style={ styles.indicadorText}> Longitude: {localizacao.coords.longitude } </Text>
                        <Text style={ styles.indicadorText}> Altitude: {localizacao.coords.altitude } </Text>
                    </View>

                    <MapView
                        initialRegion= {{
                            latitude: localizacao.coords.latitude,
                            longitude: localizacao.coords.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,

                        }}
                        style={ styles.map}
                    >
                        <Marker 
                            key= {0}
                            coordinate={{
                                latitude: localizacao.coords.latitude,
                                longitude: localizacao.coords.longitude,
                            }}
                            title="Você está aqui"
                            description= "Ta aqui"
                        />

                    </MapView>


                </>
            }
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    indicador: {
        backgroundColor: "#99E1E8",
        padding: 32,
    },
    indicadorText: {
        color: "white",
        fontSize: 20,
        paddingTop: 2,
    },
    map: {
        height: "100%",
        width: "100%"
    }
})