export const postLogin = (username, password) => {
    return fetch('http://192.168.1.38:8080/api/Auth/Login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid', JSON.stringify(response, null, 2))
            }
            return response.json()
        })
        .then(data => data.data)
        .catch(error => {
            console.error(error);
        });
}
