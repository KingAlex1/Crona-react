import React from "react"
import PropTypes from "prop-types"
import { connect } from 'react-redux'


const Sidebar = ({users}) => {

    console.log(users)
    return (
        <aside id="sidebar" className="sidebar">
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </aside>
    )
}

Sidebar.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}



export default connect(state => ({
    users: state.users
}), {})(Sidebar)