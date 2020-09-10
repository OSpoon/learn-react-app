import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1
        case 'add':
            return state + 1
        default:
            return state
    }
}


const CounterStore = createStore(counterReducer)

export default CounterStore