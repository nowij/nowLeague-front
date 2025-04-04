import axios from "axios";

export const axiosWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}

function request(method) {
    return (url, options = {}) => {
        const requestOptions = {
            method: method,
            url: url,
            headers: {
                'Content-Type': 'application/json'
            }
        };

        if (method === 'GET' && options.params) {
            requestOptions.params = options.params;
        } else if (options.body) {
            requestOptions.data = options.body;
        }

        console.log('>>> requestOptions');
        console.log(requestOptions);

        return axios(requestOptions)
            .then(res => res)
            .catch(err => {
                console.error('axios 에러', err);
            });
    }
}