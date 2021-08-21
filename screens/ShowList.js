import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../src/actions'
import { Icon } from 'react-native-elements';

export default function ShowList({ navigation, route }) {
    const { characters } = useSelector(state => state.userReducer)
    const dispatch= useDispatch() 

    //Conseguimos la lista de personajes
    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    //Se listan los personajes con un Flatlist y utilizamos un componente Character para
    //dar pequeña información del personaje
    return (
        <View>
            <FlatList
                data= {characters}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => (
                    <Character character={item} navigation={navigation} />
                )}
            />
        </View>
    )
}

function Character({ character, navigation }) { 
    const { id, name, status, image, species, gender } = character.item

    const goCharacter = () =>{
        navigation.navigate("characterDetail", {name, image, species, gender, id})
    }

    return (
        <TouchableOpacity onPress={goCharacter}>

        <View style={styles.viewCharacters}>
            <View style={styles.viewCharacterAvatar}>
                <Image source={{uri: image}} style={styles.characterAvatar}
                />
            </View>
            <View>
                <Text style={styles.characterName}> {name}</Text>
                
                <Text style={styles.characterStatus}
                 
                > {status}</Text>
            </View>
            <Icon
                type= "fontisto"
                name= "angle-right"
                iconStyle={styles.icon}
                containerStyle={styles.btn}
                onPress={goCharacter}
            />
         </View>
        </TouchableOpacity>
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
    },
    icon: {
        color: "#94cfc8",
        marginTop: 25,
        marginRight: 4
    },
    btn: {
        position: "absolute",
        right: 0
    }
})