import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js'
import { chai, describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'

import * as USER_STEP from '../step/user-step.js'
import { login } from '../step/auth-step.js'
import AUTH_DATA from '../data/auth-data.js'
import USER_DATA from '../data/user-data.js'
import * as USER_SCHEMA from '../schema/user-schema.js'

initContractPlugin(chai)

export function setup() {
    const response = login(
        AUTH_DATA.login.valid.email,
        AUTH_DATA.login.valid.password
    )
    return { token: response.json()['data']['Token'] }
}

export default function(auth) {
    let id
    describe('get all users', () => {
        const response = USER_STEP.getAllUsers(auth.token, USER_DATA.page)
        console.log(response.body)
        expect(response.json()).to.matchSchema(USER_SCHEMA.ALL_USERS_VALID_SCHEMA)
    })
    describe('create user', () => {
        const response = USER_STEP.createUser(
            auth.token,
            USER_DATA.name,
            USER_DATA.email,
            USER_DATA.location
        )
        id = response.json()['id']
        console.log(response.body)
        expect(response.json()).to.matchSchema(USER_SCHEMA.CREATE_USER_VALID_SCHEMA)
    })
    describe('edit user', () => {
        USER_STEP.editUser(
            auth.token,
            id,
            USER_DATA.nameUpdate,
            USER_DATA.emailUpdate,
            USER_DATA.locationUpdate
        )
    })
}
