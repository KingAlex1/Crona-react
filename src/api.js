import axios from 'axios'

export const singUp = ({username, email, password}) =>
    axios.post('http://localhost:4000/auth/signup',
        {
            name: username,
            email: email,
            password: password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

export const singIn = ({email, password}) =>
    axios.post('http://localhost:4000/auth/signin',
        {
            email: email,
            password: password
        })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });

export const fetchNews = (page) =>
    axios.get(`http://localhost:4000/news?page=${page}`)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });



export const fetchNewsByTags = ({tag,currentPage}) => {
    console.log(tag, currentPage)

    return axios.get(`http://localhost:4000/news?tags=${tag}&page=${currentPage}`)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const fetchCurrentNews = (hash) =>
    axios.get(`http://localhost:4000/news/${hash}`)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });


export const setTokenApi = access_token => {
    console.log('token', access_token)
    axios.defaults.headers.common['Authorization'] = `${access_token}`;
};

export const clearTokenApi = () => {
    axios.defaults.headers.common['Authorization'] = undefined;
};



