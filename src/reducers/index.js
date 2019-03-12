import {combineReducers} from 'redux'
import {reducer as form} from 'redux-form'
import {auth} from './auth'
import {messages} from "./messages";
import {users} from "./users";
import {news} from "./news";
import {blog} from "./blog";
import {user} from "./user";
import {codes} from "./codes";


export default combineReducers({
    form,
    auth,
    messages,
    users,
    news,
    blog,
    user,
    codes
})
