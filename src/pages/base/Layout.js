import React, { Component } from 'react'
import TopBar from './TopBar'
import BottomBar from './BottomBar'

export default class Layout extends Component {

    componentDidMount() {
        const { title = '首页' } = this.props
        document.title = title
    }

    render() {
        const { children, showTopBar, showBottomBar } = this.props
        console.log('children', children)
        return (
            <div>
                {showTopBar && <TopBar />}
                {children.content}
                <button onClick={children.btnClick}>Button</button>
                {showBottomBar && <BottomBar />}
            </div>
        )
    }
}
