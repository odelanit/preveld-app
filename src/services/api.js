import AsyncStorage from '@react-native-async-storage/async-storage';

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
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw Error(res.statusText)
            }
        })
        .catch(error => console.log(error))
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

export const getClients = async () => {
    try {
        let accessToken = await AsyncStorage.getItem('accessToken');
        let response = await fetch('http://192.168.1.38:8080/api/Home/Clients', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })

        return await response.json()
    } catch (error) {
        console.error(error)
    }
}

export const getClientRecords = async (name) => {
    try {
        let accessToken = await AsyncStorage.getItem('accessToken');
        let response = await fetch(`http://192.168.1.38:8080/api/Client/${name}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            }
        })

        return await response.json()
    } catch (error) {
        console.error(error)
    }
}
