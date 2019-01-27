import React, {Component} from 'react'
import Modal from '../Modal/index'

import './index.scss'

export class ModalButton extends Component {

    state = {
        isModalShow: false
    }

    hideModal = () => {

        this.setState({
            isModalShow: false
        })
    }

    showModal = () => {
        this.setState({isModalShow: true})
    }

    render() {
        const {isModalShow} = this.state;

        return (
            <div>
                <a className='nav-bar__link nav-bar__link-modal'
                   onClick={this.showModal}> Контакты
                </a>
                {isModalShow && (
                    <Modal onClose={this.hideModal}>


                    </Modal>
                )}
            </div>
        )
    }
}

export default ModalButton