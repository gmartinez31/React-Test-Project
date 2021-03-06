const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter = state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
    return {
        ...state,
        counter = state.counter + action.value // <-- this refers to the value which in our case below is 10
    };
}
    return state;
}


// Store
const store = createStore(rootReducer);
console.log(store.getState())


// Subscription
// subsc. gets triggered when the state gets updated
store.subscribe(() => {
    console.log('[Subscription]', store.getState())
});


// Dispatching Action
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState())