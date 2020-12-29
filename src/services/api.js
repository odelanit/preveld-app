import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://www.login.envisio.com.my/api'

export const postLogin = (username, password) => {
    return fetch(`${baseURL}/Auth/Login`, {
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
        let response = await fetch(`${baseURL}/Auth/ForgotPassword`, {
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
        let response = await fetch(`${baseURL}/Home/Clients`, {
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
        let response = await fetch(`${baseURL}/Client/${name}`, {
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

export const getWrapTrend = async (name) => {
    let accessToken = await AsyncStorage.getItem('accessToken');
    return fetch(`${baseURL}/Wrap/Trend/${name}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
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

export const getValveTrend = async (name) => {
    let accessToken = await AsyncStorage.getItem('accessToken');
    return fetch(`${baseURL}/Valve/Trend/${name}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
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

export const getValve = async (valveId) => {
    let accessToken = await AsyncStorage.getItem('accessToken');
    return fetch(`${baseURL}/Valve/Get/${valveId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
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

export const getWrap = async (wrapId) => {
    let accessToken = await AsyncStorage.getItem('accessToken');
    return fetch(`${baseURL}/Wrap/Get/${wrapId}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
        },
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
