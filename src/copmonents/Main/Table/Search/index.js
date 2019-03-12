import React, {Component} from 'react'
import {connect} from 'react-redux'

import './index.scss'
import {fetchCurrentUserRequest} from "../../../../actions/user";
import {fetchCodesLezyRequest} from "../../../../actions/codes";

export class Search extends Component {

    state = {
        searchInput:"" 
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            console.log(this.state.searchInput)
            this.props.fetchCodesLezyRequest(this.state.searchInput)
            this.setState({searchInput: ""})

        }
    }


    handleChange = (e) => {
        this.setState({searchInput: e.target.value})
    }

    render() {
        const {searchInput} = this.state

        return (
            <div>
                <input
                    value={searchInput}
                    className="search__input_table"
                    type="text"
                    placeholder="Название продукции ... "
                    id="product-name"
                    name="product-name"
                    onKeyDown={this.handleKeyPress}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}


export default connect(null, {fetchCodesLezyRequest})(Search)