import React from 'react';

export default function FormButton(props) {
    console.log('FormButton props', props)
    return <div className="FormButton">
        <button onClick={props.children.defauleBtns.searchCilck}>默认查询</button>
        <button onClick={props.children.defauleBtns.resetCilck}>默认重置</button>
        {
            props.children.btns.map((item, index) => {
                return <button key={'btn' + index} onClick={item.onClick}>{item.title}</button>
            })
        }
    </div>
}