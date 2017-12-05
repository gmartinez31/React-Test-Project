import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                // the action refers to the value in the maptodispatch //
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                // concat returns a new array by imutably adding an item to the original array where concat was performed
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // const newArrary = [...state.results];
            // newArrary.splice(id, 1)  ORRRR

            // filter returns a new array
            const newArrary = state.results.filter( result => result.id !== action.resultElid );
            return {
                ...state,
                results: newArrary
            }
    }
    return state;
}

export default reducer;