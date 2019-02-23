import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class UnAuthorized extends Component {


    render() {
        return (
            <div>
                <h1>Доспуп разрешел, только авторезированным пользователям <Link to="/auth/signin">Вход в сервис</Link></h1>
            </div>
        )
    }
}

export default UnAuthorized