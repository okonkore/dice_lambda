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

    let data = await dao.getDiceUser(u);
    let body = data["Item"];
    let pos = null;
    if (body.dice > 0) {
        pos = utils.getNextPos(body.pos, body.dice);
    }
    body["next"] = pos;
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
    };
    return response;
};

