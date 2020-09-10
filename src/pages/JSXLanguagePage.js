import React, { Component } from 'react'
import logo from './../logo.svg'
import style from './index.module.css'

export default class JSXLanguagePage extends Component {

    render() {

        const name = "react study"
        const person = {
            firstName: 'xin',
            lastName: 'zhang'
        }
        function fromatPerson(person) {
            return person.firstName + '-' + person.lastName
        }
        const array = [5, 3, 4, 1, 2]
        const show = true

        return (
            <div>
                <h3>JSXLanguagePage</h3>
                <h3>{name}</h3>
                <p>{person.firstName}-{person.lastName}</p>
                <p>{fromatPerson(person)}</p>
                <ul>
                    {array.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                {show ? "A" : "B"}
                <img className="img" style={{ width: 100 }} alt='' src={logo}></img>
                <img className={style.logo} alt='' src={logo}></img>
            </div>
        )
    }
}
