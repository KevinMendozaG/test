import axios from "axios"

export const GET_CHARACTERS = 'GET_CHARACTERS'

const API_URL = 'https://rickandmortyapi.com/api/character'

export function getCharacters() {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_CHARACTERS,
                    payload: json
                });
                console.log(json)
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error)
    }    
}