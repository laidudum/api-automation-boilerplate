import {
    randomString,
    randomItem
} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

const randomName = `${randomItem(['Joe', 'Jane'])} Jon${randomString(1, 'aeiou')}s`
const randomEmail = `user_${randomString(10)}@mailinator.com`
const randomLocation = randomItem(['Indonesia', 'Saudi Arabia', 'Turkey'])

const USER_DATA = {
    page: 1,
    name: randomName,
    email: randomEmail,
    location: randomLocation,
    nameUpdate: `${randomName} - Updated`,
    emailUpdate: `${randomEmail} - Updated`,
    locationUpdate: `${randomLocation} - Updated`
}

export default USER_DATA