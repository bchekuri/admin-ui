function login(username, password) {
    var urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlencoded
    };
    return fetch(`${process.env.REACT_APP_BACKEND_API}/login`, requestOptions)
        .then(response => {
            return response.text().then(text => {
                const data = text && JSON.parse(text);
                if (!response.ok) {
                    logout();
                    const error = {...data,
                        message: (data && data.message) || response.statusText
                        || process.env.REACT_APP_BACK_END_FAILED
                    };
                    return Promise.reject({...error});
                }
                return data;
            });
        })
        .then(user => {
            localStorage.setItem(`${process.env.REACT_APP_CLIENT_AUTH_STORE_KEY}`, JSON.stringify(user));
            return user;
        });
}

function logout() {
    localStorage.removeItem(`${process.env.REACT_APP_CLIENT_AUTH_STORE_KEY}`);
}


export const UserService = {
    login,
    logout
};