import React, {Component} from 'react'
import Sidebar from './Sidebar'
import MessagesList from './MessagesList'
import AddMessage from './AddMessage'
import {fetchCurrentUserRequest} from "../../../actions/user";
import {connect} from 'react-redux'
import {webSocketRequest} from "../../../actions/chat";

import './index.scss'

export class Chat extends Component {
    componentWillMount() {
        this.props.webSocketRequest()
    }

    render() {
        return (
            <div id="container">
                <Sidebar/>
                <section id="main">
                    <MessagesList/>
                    <AddMessage/>
                </section>
            </div>
        )
    }
}

const mapDispatchToProps = {
    fetchCurrentUserRequest,
    webSocketRequest
}

export default connect(null, mapDispatchToProps)(Chat)