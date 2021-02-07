import { CREATE_SPOTS, FETCH_SPOTS } from '../actions/spotAction'

const initialState = {
    spots: []
}

export default function(state = initialState, action) {

    switch(action.type) {
        case FETCH_SPOTS:
            // when this is triggered
            return {
                ...state,
                spots: action.payload
            }
        case CREATE_SPOTS:
            console.log(action.payload)
            return {
                ...state,
                spots: state.spots.concat(action.payload.data)
            }
    }

    return state
}