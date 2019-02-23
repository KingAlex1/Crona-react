import React, {Component} from 'react'
import Sidebar from './Sidebar'
import MessagesList from './MessagesList'
import AddMessage from './AddMessage'

import './index.scss'

export class Chat extends Component {

    render() {
        return (
            <div id="container">
                <Sidebar/>
                <section id="main">
                    <MessagesList />
                    <AddMessage />
                </section>
            </div>
        )
    }
}


export default Chat