import React, {useState, useEffect, useCallback} from 'react'
import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../src/actions'
import { userReducer } from '../src/reducers'
import { useFocusEffect } from '@react-navigation/core'

export default function ShowList({ navigation, route }) {
    const [charactersList, setCharactersList] = useState([])
    const { characters } = useSelector(state => state.userReducer)
    const dispatch= useDispatch()

    // useEffect(() => {
    //     (async() => {
    //         const API_URL = 'https://rickandmortyapi.com/api/character'
    //         const response = await fetch(API_URL)
    //         setCharactersList(await response.json()) 
    //         console.log(charactersList.results)
    //         // await fetch(API_URL).then((data) => data.json().then((res) =>
    //         //     setCharactersList
    //         // ))
    //     })()
    // }, [])
    useFocusEffect(
        useCallback(() => {
            async function getData() {
                const API_URL = 'https://rickandmortyapi.com/api/character'
                fetch(API_URL).then((data) => data.json()).then((res) =>{
                    setCharactersList(res.results)
                })
            }
            getData()
        }, [])
    )

    useEffect(() => {
        dispatch(getCharacters())
    }, [])


    return (
        <View>
            <FlatList
                data= {charactersList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(character, index) => (
                    <Character character={character}/>
                )}
            />
            {/* <FlatList
            data={charactersList}
            renderItem= {({item}) =>(
                <View>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                </View>
            )}
            /> */}
        </View>
    )
}

function Character({ character }) { 
    const { name, status, image } = character.item

    return (
        <View style={styles.viewCharacters}>
            <View style={styles.viewCharacterAvatar}>
                <Image source={{uri: image}} style={styles.characterAvatar}/>
            </View>
            <View>
                <Text style={styles.characterName}> {name}</Text>
                <Text style={styles.characterStatus}> {status}</Text>
            </View>
         </View>
    )
}

const styles = StyleSheet.create({
    viewCharacters: {
        flexDirection: "row",
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#e4546c"
    },
    viewCharacterAvatar: {
        marginRight: 15
    },
    characterName: {
        fontWeight: "bold"
    },
    characterStatus: {
        paddingTop: 2,
        color: "grey"
    },
    characterAvatar: {
        height: 90,
        width: 90,
        resizeMode: "contain"
    }
})