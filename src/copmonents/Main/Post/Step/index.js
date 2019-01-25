import React, {PureComponent} from 'react'

import './index.scss'

export class Step extends PureComponent {

    handleClick = () => {
        const {isClickable, onClick, number} = this.props
        if (isClickable) onClick(number)
    }

    render() {
        const {isSelected, isClickable, number, children} = this.props;


        return (
            <div
                className={"step " + (isSelected ? "step-selected" : "") + (isClickable ? "step-clickable" : "")}
                onClick={this.handleClick}>
                <p className='step__number'>{number}</p>
                <p className='step__children'>{children}</p>
            </div>
        )
    }
}

export default Step