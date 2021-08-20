import React, {useCallback, useState} from 'react'
import { useFocusEffect } from '@react-navigation/core'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function CharacterDetails({navigation, route}) {
    const { name, image, species, gender, id } = route.params
    const [location, setLocation] = useState([])

    //Consultar la ubicación de el personaje
    useFocusEffect(
        useCallback(() => {
            async function getData() {
                const API_URL = 'https://rickandmortyapi.com/api/location'
                fetch(`${API_URL}/${id}`).then((data) => data.json()).then((res) =>{
                    setLocation(res)
                })
            }
            getData()
        }, [])
    )
    //Pantalla de detalle del personaje
    return (
        <View style={styles.container}>
            <View style={styles.viewCharacterAvatar}>
                <Image source={{uri: image}} style={styles.characterAvatar}
                />
            </View>

            <View style={styles.InfoCharacter}>
                <Text style={styles.textInfo}>Nombre: {name}</Text>
                <Text style={styles.textInfo}>Género: {gender}</Text>
                <Text style={styles.textInfo}>Especie: {species}</Text>
                <Text style={styles.textInfo}>Ubicación: {location.name}</Text>
                <Text style={styles.textInfo}>Tipo de locación: {location.type}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 40,
        paddingLeft: 10,
        flexDirection: "column",
        borderBottomWidth: 1,
        borderBottomColor: "#e4546c"
    },
    InfoCharacter: {
        alignItems: "center"
    },
    textInfo: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 10,    
    },
    viewCharacterAvatar: {
        borderBottomWidth: 1,
        borderBottomColor: "#e4546c",
        alignItems: "center",
    },
    characterAvatar: {
        height: 250,
        width: 250,
        marginBottom: 15,
    }
})
