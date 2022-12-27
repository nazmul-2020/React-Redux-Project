import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    product: [],
    error: false,
    cart: []
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionTypes.FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload,
                error: false,
            }
        case actionTypes.FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        default:
            return state
    }
};