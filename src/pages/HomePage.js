import React, { Component } from 'react'
import Card from './base/Card'
import FormButton from './base/FormButton'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Card>
                    <h3>HomePage</h3>
                    <FormButton>
                        {{
                            defauleBtns: {
                                searchCilck: () => console.log('默认查询'),
                                resetCilck: () => console.log('默认重置')
                            },
                            btns: [
                                {
                                    title: '查询',
                                    onClick: () => console.log('查询')
                                }, {
                                    title: '重置',
                                    onClick: () => console.log('重置')
                                }
                            ]
                        }}
                    </FormButton>
                </Card>
            </div>
        )
    }
}
