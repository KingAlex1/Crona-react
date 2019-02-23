import React, {Component} from 'react'

import './index.scss'

export class ErrorField extends Component {

    render() {

        const {input, className, labelClassName,divClassName, type, label, meta: {error, touched}} = this.props
        const errorText = touched && error &&
            <div style={{color: 'red'}}> {error}</div>

        return (
            <div className='form-group row'>
                <label
                    className={labelClassName}>{label}</label>
                <div className={divClassName}>
                    <input className={className}
                           type={type} {...input} />
                    {errorText}
                </div>

            </div>
        )
    }
}


export default ErrorField