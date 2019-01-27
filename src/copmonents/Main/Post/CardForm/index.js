import React, {Component} from 'react'
import Title from '../Title'

import './index.scss'

export class CardForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leftTime: 120
        }

    }


    handleChangeForm = e => {
        this.props.onChangeForm(
            e.target.name,
            e.target.value
        )
    }


    render() {
        const {title, disabled, onNextForm} = this.props

        return (
            <div className='card-form'>
                <Title> {title} </Title>
                <form action="">
                    <div className='form-group'>
                        <label
                            htmlFor="question"></label>

                        <textarea
                            id='question'
                            className='question form-control'
                            placeholder='Добрый день, интересует ....'
                            name='cardNumber'
                            value={this.props.cardNumber}
                            onChange={this.handleChangeForm}
                            rows='6'
                        />

                    </div>
                    <button type='submit'
                            className='button-next btn btn-primary'
                            disabled={disabled}
                            onClick={onNextForm}
                    >
                        Дальше
                    </button>
                </form>
            </div>
        )
    }
}

export default CardForm