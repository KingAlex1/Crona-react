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
        const {title} = this.props

        return (
            <div className='card-form'>
                <Title> {title} </Title>
                <form action="">
                    <div className='form-group'>
                        <label
                            htmlFor="question">Вопрос</label>

                        <textarea
                            id='question'
                            className='question form-control'
                            placeholder='Добрый день, интересует ....'
                            name='cardNumber'
                            value={this.props.cardNumber}
                            onChange={this.handleChangeForm}
                            row="4"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default CardForm