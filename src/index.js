const validate = require('schema-utils');
const axios = require('axios');

const simpleMethods = [
    'request',
    'get',
    'delete',
    'head',
    'options'
];

const dataMethods = [
    'post',
    'put',
    'patch'
]

async function validateApi(method, endpoint, schema, data = {}, config = {}) {
    const client = axios.create(config);

    if (simpleMethods.includes(method)) {
        return await client[method](endpoint)
            .then(response => {
                return validate(schema, response.data, endpoint);
            });
    }
    if (dataMethods.includes(method)) {
        return await client[method](endpoint, data)
            .then(response => {
                return validate(schema, response.data, endpoint);
            });
    }
}

module.exports = validateApi;
