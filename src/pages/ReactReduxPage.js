import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReactReduxPage extends Component {
    render() {

        const { num, add } = this.props

        return (
            <div>
                <h3>ReactReduxPage</h3>
                <p>{num}</p>
                <button onClick={add}>ADD</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        num: state,
    }
}

const mapDispatchToProps = {
    add: () => {
        console.log('add')
        return { type: 'add' }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)
