export const ALL_USERS_VALID_SCHEMA = {
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "per_page": {
      "type": "integer"
    },
    "totalrecord": {
      "type": "integer"
    },
    "total_pages": {
      "type": "integer"
    },
    "data": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        },
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer"
            },
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "profilepicture": {
              "type": "string"
            },
            "location": {
              "type": "string"
            },
            "createdat": {
              "type": "string"
            }
          },
          "required": [
            "id",
            "name",
            "email",
            "profilepicture",
            "location",
            "createdat"
          ]
        }
      ]
    }
  },
  "required": [
    "page",
    "per_page",
    "totalrecord",
    "total_pages",
    "data"
  ]
}

export const CREATE_USER_VALID_SCHEMA = {
  "type": "object",
  "properties": {
    "id": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "email": {
      "type": "string"
    },
    "profilepicture": {
      "type": "string"
    },
    "location": {
      "type": "string"
    },
    "createdat": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name",
    "email",
    "profilepicture",
    "location",
    "createdat"
  ]
}
