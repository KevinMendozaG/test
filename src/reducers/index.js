import { GET_CHARACTERS } from '../actions'
 
const initialState = {
    list: []
}
 
function userReducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_CHARACTERS:
            return {...state, characters: action.payload}
        default:
            return state 
    }
}

export default userReducer