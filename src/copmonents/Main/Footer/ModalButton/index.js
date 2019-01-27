import React, {Component} from 'react'

import './index.scss'
import Modal from "../Modal";

export class ModalButton extends Component {

    state = {isModalShow: false}

    hideModal = () => {
        this.setState({
            isModalShow: false
        })
    }

    showModal = () => {
        this.setState({
            isModalShow: true
        })
    }

    render() {
        const {isModalShow} = this.state

        return (
            <div className='modal__footer'>
                <a className='footer__bottom_link'
                   onClick={this.showModal}>Пользовательское
                    соглашение</a>
                {isModalShow&&(<Modal onClose={this.hideModal}/>)}
            </div>
        )
    }

}

export default ModalButton
