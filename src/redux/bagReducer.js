
let initialState = {
	cart: []
}

const ADD_PURCHASE = 'ADD_PURCHASE';

export const addItem = (data) => {
	return {
			type: ADD_PURCHASE,
			payload: data
	}
}

export default function bagReducer(state = initialState, action) {
	switch (action.type) {
			case ADD_PURCHASE:
					return { ...state, cart: action.payload }
			default:return state;
	}}