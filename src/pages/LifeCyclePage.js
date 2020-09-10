import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class LifeCyclePage extends Component {
    static defaultProps = {
        msg: 'omg'
    }

    static propTypes = {
        msg: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        console.log('constructor', this.state.count)
    }

    componentDidMount() {
        console.log('componentDidMount', this.state.count)
    }

    componentWillUnmount() {
        //组件卸载之前
        console.log('componentWillUnmount', this.state.count)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state.count)
    }

    shouldComponentUpdate(nextProps, nextState) {
        const { count } = nextState
        console.log('shouldComponentUpdate', count, nextState.count)
        return count !== 3
    }

    setCount = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('state update')
        })
    }

    render() {
        const { count } = this.state
        return (
            <div>
                <h3>LifeCyclePage</h3>
                <p>{count}</p>
                <button onClick={this.setCount}>改变Count</button>
                <Child count={count}></Child>
            </div>
        )
    }
}

class Child extends Component {

    componentWillUnmount() {
        //组件卸载前
        console.log('Child componentWillUnmount')
    }

    render() {
        return (
            <div style={{ border: "solid 1px black", margin: "10px", padding: "10px" }}>
                我是Child组件
                <div>Child Count: {this.props.count}</div>
            </div>
        )
    }
}
