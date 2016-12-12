const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuid = require('node-uuid');

exports.handler = function(event, context) {

  const params = {
    TableName: 'users',
    Item: {
      id: uuid.v4(),
      email: event['email']
    }
  };

  dynamo.put(params, function(error) {
    if (error) {
      context.fail(
        new Error('Fail. err:' + error)
      );
    } else {
      context.done(null, params);
    }
  });
};
