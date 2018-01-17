# API contract

A simple library/command-line tool to verify API responses.

## Usage

### Sample configuration

```json
[
    {
        "method": "get",
        "endpoint": "https://api.github.com/users/MunGell",
        "schema": "tests/test-schema.json"
    }
]
```

### Sample schema

```json
{
    "type": "object",
    "properties": {
        "login": {
            "type": "string"
        },
        "id": {
            "type": "number"
        },
        "avatar_url": {
            "type": "string"
        },
        "gravatar_id": {
            "type": "string"
        },
        "url": {
            "type": "string"
        },
        "html_url": {
            "type": "string"
        },
        "followers_url": {
            "type": "string"
        }
    },
    "additionalProperties": true
}
```

## Documentation

* Information on schema format could be found here: https://github.com/webpack-contrib/schema-utils
* Configuration file is an array of tested endpoints (objects) with following parameters:
    * `method` - request method e.g. get, post, head
    * `endpoint` - URL to request
    * `schema` - path to the schema file
    * `data` - (optional) data object for post, patch and put request
    * `config` - (optional) additional request configuration object

## Licence

MIT
