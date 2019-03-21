"use strict";
var dao = require('dice-dao');
var master = require('dice-master');
var utils = require('dice-utils');
console.log(master);
var time = new Date();

exports.handler = async (event) => {
    console.log("diceGetUser");
    console.log(dao);
    let u = event.params.querystring.uuid;

    let current = 23;
    let pos = utils.getNextPos(current, 10);
    console.log(utils.getNextPos(current, 10));

    let data = await dao.getDiceUser(u);
    let body = data["Item"];
    body["pos"] = pos;
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};

