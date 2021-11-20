let initialState = {
	username: '',
	password: '',
	cart: []
};

const LOGOUT_USER = 'LOGOUT_USER';
const ADD_PURCHASE = 'ADD_PURCHASE';

export const logout = () => {
	return {
			type: LOGOUT_USER
	}
}
export const addItem = (data) => {
	return {
			type: ADD_PURCHASE,
			payload: data
	}
}

export default function reducer(state = initialState, action) {
	switch (action.type){
		case LOGOUT_USER:
      return {...state, }
		case ADD_PURCHASE:
			return { ...state, cart: action.payload }
		default: return state;
	}
}