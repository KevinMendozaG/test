import axios from 'axios'
 
export const GET_CHARACTERS = 'GET_CHARACTERS'

const API_URL = 'https://rickandmortyapi.com/api/character'

export function getCharacters() {
    try {
        // return(dispatch, getState) => {
        //     axios.get(API_URL)
        //         .then((response) => {
        //             if (response) {
        //                 dispatch({type: GET_CHARACTERS, payload: response.data})
        //             } else {
        //                 console.log('Unable to fetch!');
        //             }
        //         })
        // }
        return async dispatch => {
            const result = await fetch(API_URL)
            const json = await result.json()
            
            if (json) {
                dispatch({
                    type: GET_CHARACTERS,
                    payload: json.results
                });
            } else {
                console.log('Unable to fetch!');
            }
        }
    } catch (error) {
        console.log(error)
    }    
}
