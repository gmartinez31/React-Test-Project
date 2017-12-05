const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                // the action refers to the value in the maptodispatch //
                counter: state.counter + action.value
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE-RESULT':
            return {
                ...state,
                // concat returns a new array by imutably adding an item to the original array where concat was performed
                results: state.results.concat({ id: new Date(), value: state.counter })
            }
        case 'DELETE-RESULT':
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