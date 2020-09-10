import React, { Component } from 'react'

export default class ClassComponentPage extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    render() {
        const { date } = this.state
        return (
            <div>
                <h3>ClassComponentPage</h3>
                <p>{date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
