var dao = require('dice-dao');

exports.handler = async (event) => {
    let pos = event.pos;
    let uuid = event.uuid;
    await dao.updatePos(uuid, pos);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            pos: pos,
            uuid: uuid,
            dice: 0
        }),
    };
    return response;
};

