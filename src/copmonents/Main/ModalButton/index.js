import React, {Component} from 'react'
import Modal from '../Modal'

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
                        <h1>Мондальное окно</h1>
                    </Modal>
                )}
            </div>
        )
    }
}

export default ModalButton