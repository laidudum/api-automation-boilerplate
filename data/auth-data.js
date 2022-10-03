import {
    randomString,
    randomItem,
    uuidv4,
} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

const randomName = `${randomItem(['Joe', 'Jane'])} Jon${randomString(1, 'aeiou')}s`
const randomEmail = `user_${randomString(10)}@mailinator.com`
const randomPassword = uuidv4()

const AUTH_DATA = {
    register: {
        valid: {
            name: randomName,
            email: randomEmail,
            password: randomPassword
        },
        invalid: {
            name: 'Ujang Jajang',
            email: 'ujang.jajang@mailinator.com',
            password: '123456'
        }
    },
    login: {
        valid: {
            email: 'ujang.jajang@mailinator.com',
            password: '123456'
        },
        invalid: {
            email: 'invalid@mailinator.com',
            password: 'qwerty'
        }
    }
}

export default AUTH_DATA
