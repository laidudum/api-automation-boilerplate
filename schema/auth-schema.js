export const REGISTER_VALID_SCHEMA = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer"
        },
        "message": {
            "type": "string"
        },
        "data": {
            "type": "object",
            "properties": {
                "Id": {
                    "type": "integer"
                },
                "Name": {
                    "type": "string"
                },
                "Email": {
                    "type": "string"
                },
                "Token": {
                    "type": "string"
                }
            },
            "required": [
                "Id",
                "Name",
                "Email",
                "Token"
            ]
        }
    },
    "required": [
        "code",
        "message",
        "data"
    ]
}

export const REGISTER_INVALID_SCHEMA = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer"
        },
        "message": {
            "type": "string"
        },
        "data": {
            "type": "null"
        }
    },
    "required": [
        "code",
        "message",
        "data"
    ]
}

export const LOGIN_VALID_SCHEMA = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer"
        },
        "message": {
            "type": "string"
        },
        "data": {
            "type": "object",
            "properties": {
                "Id": {
                    "type": "integer"
                },
                "Name": {
                    "type": "string"
                },
                "Email": {
                    "type": "string"
                },
                "Token": {
                    "type": "string"
                }
            },
            "required": [
                "Id",
                "Name",
                "Email",
                "Token"
            ]
        }
    },
    "required": [
        "code",
        "message",
        "data"
    ]
}

export const LOGIN_INVALID_SCHEMA = {
    "type": "object",
    "properties": {
        "code": {
            "type": "integer"
        },
        "message": {
            "type": "string"
        },
        "data": {
            "type": "null"
        }
    },
    "required": [
        "code",
        "message",
        "data"
    ]
}
