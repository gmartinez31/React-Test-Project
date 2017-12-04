import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* So instead of the line below, by using connect, we get our state from redux store so.. */}
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />

                {/* <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} /> */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />

                {/* <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  /> */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />

                {/* <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  /> */}
                <CounterControl label="Add 5" clicked={this.props.onAdd5Counter} />

                {/* <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  /> */}
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract5Counter} />
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        // basically saying that state.counter is the global state
        ctr: state.counter
    };
};

const mapDispatchtoProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAdd5Counter: () => dispatch({type: 'ADD 5'}),
        onSubtract5Counter: () => dispatch({type: 'SUBTRACT 5'})
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);