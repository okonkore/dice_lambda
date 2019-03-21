var dao = require('dice-dao');
var utils = require('dice-utils');

exports.handler = async (event) => {
    let u = event.uuid;
    let dice = Math.floor((Math.random() * 6)) + 1;

    await dao.updateDice(u, dice);

    const response = {
        statusCode: 200,
        body: JSON.stringify({ "dice": dice, 'uuid': event.uuid }),
    };
    return response;
};

