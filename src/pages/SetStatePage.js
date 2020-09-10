import React, { Component } from 'react'

export default class SetStatePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    changeValue = (value) => {
        // this.setState({
        //     count: this.state.count + value
        // }, () => {
        //     console.log('update success')
        // })

        //链式更新
        this.setState(state => ({
            count: state.count + value
        }), () => {
            console.log('update success')
        })
        console.log("changeValue")
    }

    setCounter = () => {
        this.changeValue(1)
        this.changeValue(2)
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h3>SetStatePage</h3>
                <button onClick={this.setCounter}>ADD{count}</button>
            </div>
        )
    }
}
