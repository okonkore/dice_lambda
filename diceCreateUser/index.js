var uuid = require('uuid');
var dao = require('dice-dao');
var time = new Date();

exports.handler = async (event) => {
    var u = uuid.v4();

    var params = {
        uuid: u,
        create_time: time.getTime()
    };
    
    await dao.putDiceUser(u, time.getTime());

    const response = {
        statusCode: 200,
        body: JSON.stringify(params),
    };
    return response;
};

