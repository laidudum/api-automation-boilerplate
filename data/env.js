const Host = {
    Development: 'http://restapi.adequateshop.com',
    Preview: '',
    Production: ''
}

const Env = {
    Development: {
        Auth: {
            Register: `${Host.Development}/api/authaccount/registration`,
            Login: `${Host.Development}/api/authaccount/login`
        },
        User: `${Host.Development}/api/users`
    },
    Preview: {
        Auth: {
            Register: `${Host.Preview}}/api/authaccount/registration`,
            Login: `${Host.Preview}/api/authaccount/login`
        },
        User: `${Host.Preview}/api/users`
    },
    Production: {
        Auth: {
            Register: `${Host.Production}}/api/authaccount/registration`,
            Login: `${Host.Production}/api/authaccount/login`
        },
        User: `${Host.Production}/api/users`
    }
}

const DEVELOPMENT = 'development'
const PREVIEW = 'preview'
const PRODUCTION = 'production'

export const config = () => {
    switch (__ENV.STAGE) {
        case DEVELOPMENT: return Env.Development
        case PREVIEW: return Env.Preview
        case PRODUCTION: return Env.Production
        default: throw `Stage ${__ENV.STAGE} not found!`
    }
}
