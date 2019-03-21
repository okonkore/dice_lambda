"use strict";
var diceMaster = require('dice-master');

exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify(diceMaster),
    };
    return response;
};

