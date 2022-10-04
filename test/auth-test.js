import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js'
import { chai, describe, expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'

import * as AUTH_STEP from '../step/auth-step.js'
import AUTH_DATA from '../data/auth-data.js'
import * as AUTH_SCHEMA from '../schema/auth-schema.js'

initContractPlugin(chai)

export default function() {
    describe('register using valid credentials', () => {
        const response = AUTH_STEP.register(
            AUTH_DATA.register.valid.name,
            AUTH_DATA.register.valid.email,
            AUTH_DATA.register.valid.password
        )
        console.log(response.body)
        expect(response.json()).to.matchSchema(AUTH_SCHEMA.REGISTER_VALID_SCHEMA)
    })
    describe('register using invalid credentials', () => {
        const response = AUTH_STEP.register(
            AUTH_DATA.register.invalid.name,
            AUTH_DATA.register.invalid.email,
            AUTH_DATA.register.invalid.password
        )
        console.log(response.body)
        expect(response.json()).to.matchSchema(AUTH_SCHEMA.REGISTER_INVALID_SCHEMA)
    })
    describe('login using valid credentials', () => {
        const response = AUTH_STEP.login(
            AUTH_DATA.login.valid.email,
            AUTH_DATA.login.valid.password
        )
        console.log(response.body)
        expect(response.json()).to.matchSchema(AUTH_SCHEMA.LOGIN_VALID_SCHEMA)
    })
    describe('login using invalid credentials', () => {
        const response = AUTH_STEP.login(
            AUTH_DATA.login.invalid.email,
            AUTH_DATA.login.invalid.password
        )
        console.log(response.body)
        expect(response.json()).to.matchSchema(AUTH_SCHEMA.LOGIN_INVALID_SCHEMA)
    })
}
