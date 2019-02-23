import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../../../../actions/chat'
import './index.scss'

export class AddMessage extends Component {

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            
            this.props.addMessage({
                message: e.target.value,
                author: 'Me'
            })
            e.target.value = ''
        }
    }

    render() {
        return (
            <section id="new-message">
                <input
                    onKeyPress={this.handleKeyPress}
                    type="text"
                />
            </section>
        )
    }
}



const mapDispatchToProps = {
    addMessage
}

export default connect(() => ({}), mapDispatchToProps)(AddMessage)