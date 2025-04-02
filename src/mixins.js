export const axiosWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
}

function request(method) {
    return (url, body) => {
        const requestOptions = {
            method: method,
            headers: authHeader(),
            url: url
        };

        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.data = body;
        }
        console.log('>>> requestOptions')
        console.log(requestOptions)

        return axios(requestOptions)
            .then(res => {
                console.log(res.data);
                return res;
            })
            .catch(err => {
                console.log('axios 에러');
                console.log(err);
            });
    }
}