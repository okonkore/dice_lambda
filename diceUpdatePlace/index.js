exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            place : 1,
            event : event
        }),
    };
    return response;
};

