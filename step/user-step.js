import http from 'k6/http'
import { config } from '../data/env.js'
import { URL } from 'https://jslib.k6.io/url/1.0.0/index.js'

export function getAllUsers(token, page) {
    const url = new URL(config().User)
    url.searchParams.append('page', page)
    const params = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return http.get(url.toString(), params)
}

export function createUser(token, name, email, location) {
    const url = config().User
    const payload = JSON.stringify({
        name: name,
        email: email,
        location: location
    })
    const params = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return http.post(url, payload, params)
}

export function editUser(token, id, name, email, location) {
    const url = `${config().User}/${id}`
    const payload = JSON.stringify({
        id: id,
        name: name,
        email: email,
        location: location
    })
    const params = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    http.put(url, payload, params)
}
