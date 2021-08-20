import React, {useState, useEffect} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { getCharacters } from '../src/actions'

export default function ShowList() {
    const { characters } = useSelector(state => state.userReducer)
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return (
        <View>
            <Text>ShowListrrrr</Text>
            <FlatList
            data={characters}
            renderItem= {({item}) =>(
                <View>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                </View>
            )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})