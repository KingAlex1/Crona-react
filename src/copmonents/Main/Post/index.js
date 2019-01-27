import React, {Component} from 'react'

import Step from './Step'
import PersonalForm from './PersonalForm'
import CardForm from './CardForm'

import './index.scss'

export class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            cardNumber: "",
        }
        this.stepTitles = {
            first: "Персональная информация",
            second: "Ваш вопрос",
            third: "Вопрос отправлен"
        }
    }

    handleTabClick = step => {
        this.setState({step})
    }

    handleChangeForm = (stateKey, stateValue) => {
        this.setState({
            [stateKey]: stateValue
        })
    }

    handleClickNextForm = () => {
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    isFormCommitable = () => {
        const {...state} = this.state
        switch (state.step) {
            case 1:
                return (
                    state.firstName !== "" && state.lastName !== "" && state.email !== "" && state.email.includes('@')
                )
            case 2:
                return state.cardNumber !== ""
            default:
                return false
        }
    }

    renderDesk() {
        const {...state} = this.state
        let tabPanel

        switch (state.step) {
            case 1:
                tabPanel = (
                    <div className='tab-panel'>
                        <Step
                            key={this.stepTitles.first}
                            number={1}
                            isSelected={true}
                            isClickable={false}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.first}
                        </Step>
                        <Step
                            key={this.stepTitles.second}
                            number={2}
                            isSelected={false}
                            isClickable={false}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.second}
                        </Step>
                        <Step
                            key={this.stepTitles.third}
                            number={3}
                            isSelected={false}
                            isClickable={false}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.third}
                        </Step>
                    </div>
                )
                break
            case 2:
                tabPanel = (
                    <div className='tab-panel'>
                        <Step
                            key={this.stepTitles.first}
                            number={1}
                            isSelected={false}
                            isClickable={true}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.first}
                        </Step>
                        <Step
                            key={this.stepTitles.second}
                            number={2}
                            isSelected={true}
                            isClickable={false}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.second}
                        </Step>
                        <Step
                            key={this.stepTitles.third}
                            number={3}
                            isSelected={false}
                            isClickable={false}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.third}
                        </Step>
                    </div>
                )
                break
            case 3:
                tabPanel = (
                    <div className='tab-panel'>
                        <Step
                            key={this.stepTitles.first}
                            number={1}
                            isSelected={false}
                            isClickable={true}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.first}
                        </Step>
                        <Step
                            key={this.stepTitles.second}
                            number={2}
                            isSelected={false}
                            isClickable={true}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.second}
                        </Step>
                        <Step
                            key={this.stepTitles.third}
                            number={3}
                            isSelected={true}
                            isClickable={false}
                            onClick={this.handleTabClick}
                        >
                            {this.stepTitles.third}
                        </Step>
                    </div>
                )
                break
            default:
                tabPanel = ""
        }
        return tabPanel
    }


    renderForm() {
        const {...state} = this.state;
        let form;
        switch (state.step) {
            case 1:
                form = (
                    <PersonalForm
                        title = {this.stepTitles.first}
                        firstName={state.firstName}
                        lastName={state.lastName}
                        email={state.email}
                        onChangeForm={this.handleChangeForm}
                        disabled={!this.isFormCommitable() ? 'disabled' : null}
                        onNextForm={this.handleClickNextForm}
                    />
                )
                break
            case 2:
                form = (
                    <CardForm
                        title={this.stepTitles.second}
                        curdNumber={state.cardNumber}
                        onChangeForm={this.handleChangeForm}
                        disabled={!this.isFormCommitable() ? 'disabled' : null}
                        onNextForm={this.handleClickNextForm}
                    />
                )
                break
            case 3:
                form = "Спасибо Ваш запрос отправлен"
                break
            default:
                form = ""
        }
        return form
    }


    render() {


        return (
            <div className='post__section'>
                {this.renderDesk()}
                <div className='form-container'>
                    {this.renderForm()}
                </div>

            </div>
        )
    }
}

export default Post