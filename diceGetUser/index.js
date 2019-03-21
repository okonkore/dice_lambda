"use strict";
var dao = require('dice-dao');
var master = require('dice-master');
console.log(master);
var time = new Date();

var getNextPos = function(current, dice){
    console.log(master);
    let next = master.board[current].next;
    if(dice == 1){
        return next;
    }
    let nextList = [];
    for(let i = 0; i < next.length; i++){
        let l = getNextPos(next[i], dice -1);
        nextList = nextList.concat(l);
    }
    return nextList;
}

exports.handler = async (event) => {
    console.log("diceGetUser");
    console.log(dao);
    let u = event.params.querystring.uuid;
    
    let current = 23;
    console.log(getNextPos(current, 10));
    
    let data = await dao.getDiceUser(u);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(data["Item"]),
    };
    return response;
};

