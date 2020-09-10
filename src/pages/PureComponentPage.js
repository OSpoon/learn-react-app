import React, { PureComponent } from 'react';

export default class PureCompontPage extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    setCounter = () => {
        this.setState({
            counter: 100
        })
    }

    render() {
        const { counter } = this.state
        console.log('render')
        return (
            <div>
                <h1>PureCompontPage</h1>
                <div onClick={this.setCounter}>counter: {counter}</div>
            </div>
        )
    }
}