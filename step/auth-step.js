import http from 'k6/http'
import { config } from '../data/env.js'

export function register(name, email, password) {
    const url = config().Auth.Register
    const payload = JSON.stringify({
        name: name,
        email: email,
        password: password
    })
    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post(url, payload, params)
}

export function login(email, password) {
    const url = config().Auth.Login
    const payload = JSON.stringify({
        email: email,
        password: password
    })
    const params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post(url, payload, params)
}
