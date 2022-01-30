
const initialState = {
	items: [],
};

export const ACTIONS ={
	GET_ITEMS: 'GET_ITEMS',
	ADD_PURCHASE: 'ADD_PURCHASE',
	DELETE_ITEM: "DELETE_ITEM",
};

export default function reducer(state = initialState, action) {
	switch (action.type){
		case ACTIONS.GET_ITEMS:
			return {
				...state,
				items: action.payload
			};
		case ACTIONS.ADD_PURCHASE:
			return {
				...state, 
				items: action.payload
			};
		case ACTIONS.DELETE_ITEM:
			return {
				...state,
				items: action.payload,
			};
		default: return state;
	};
};