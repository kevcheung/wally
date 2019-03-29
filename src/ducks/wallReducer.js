import axios from 'axios';

const GET_WALLS = 'GET_WALLS';

export function getWalls() {
    return{
        type: GET_WALLS,
        payload: axios.get('/api/getWalls')
    };
}

const initialState = {
    walls: []
}

export default function wallReducer(state = initialState, action){
    // console.log('PAYLOAD!!!!', action.payload);
    switch(action.type) {
        case `${GET_WALLS}_FULFILLED`:
        return {
            ...state,
            walls: action.payload.data
        }
        default:
        return state;
    }
}