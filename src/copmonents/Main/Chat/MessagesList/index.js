import React from "react"
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import Message from "../Message"

const MessagesList = ({messages}) => {

    return (
        <section id="messages-list">
            <ul>
                { messages.slice(1,messages.length).map(message => (
                    <Message
                        key={message.id}
                        {...message}
                    />
                ))}
            </ul>
        </section>
    )
}


MessagesList.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}


export default connect (state => ({
    messages: state.messages
}), {})(MessagesList)