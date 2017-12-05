import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat returns a new array by imutably adding an item to the original array where concat was performed
                results: state.results.concat({ id: new Date(), value: action.result })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArrary = [...state.results];
            // newArrary.splice(id, 1)  ORRRR

            // filter returns a new array
            const newArrary = state.results.filter(result => result.id !== action.resultElid);
            return {
                ...state,
                results: newArrary
            }
    }
    return state;
}

export default resultReducer;