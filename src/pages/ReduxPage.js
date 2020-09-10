import React, { Component } from 'react'
import CounterStore from '../store/ReduxStore'


export default class ReduxPage extends Component {
    componentDidMount() {
        CounterStore.subscribe(() => {
            this.forceUpdate()
        })
    }

    add = () => {
        CounterStore.dispatch({ type: 'ADD' })
    }

    render() {
        return (
            <div>
                <h3>ReduxPage</h3>
                {CounterStore.getState()}
                <button onClick={this.add}>ADD</button>
            </div>
        )
    }
}
