import { ADD_EVENT, GET_EVENTS, SELECT_EVENT, EDIT_EVENT, DELETE_EVENT } from './types'

export default (state, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: action.payload
            };
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        case SELECT_EVENT:
            return {
                ...state,
                selectedEvent: action.payload,
            };
        case EDIT_EVENT:
            return {
                ...state,
                events: action.payload
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: action.payload
            }
        default:
            return state;
    }

}