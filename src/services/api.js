export const postLogin = async (username, password) => {
    try {
        let response = await fetch('http://192.168.1.38:8080/api/Auth/Login', {
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

        return await response.json()
    } catch (error) {
        console.error(error);
    }
}

export const sendPasswordResetLink = async (email) => {
    try {
        let response = await fetch('http://192.168.1.38:8080/api/Auth/ForgotPassword', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })

        return await response.json()
    } catch (error) {
        console.error(error)
    }
}
