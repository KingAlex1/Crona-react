import React from 'react'

import './index.scss'

export const Welcome = ({user}) => {

    console.log(user)
    return (
        <div className="submit-section">
            <div className="sign-in-welcome line-2 anim-typewriter2">Добро пожаловать {user}</div>
        </div>
    )

}

export default Welcome