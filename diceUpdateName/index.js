var dao = require('dice-dao');
var time = new Date();


exports.handler = async (event) => {
    let u = event.uuid;
    let name = event.user_name;

    await dao.updateName(u, name);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({"user_name" : name, 'uuid' : event.uuid}),
    };
    return response;
};

