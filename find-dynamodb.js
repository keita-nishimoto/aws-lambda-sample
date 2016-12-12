const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = function(event, context) {

  const params = {
    TableName: 'users',
    FilterExpression : 'id = :val',
    ExpressionAttributeValues : {':val': 'c9f8eced-b6a4-4ea6-b203-78e987f2f50d'}
  };

  dynamo.scan(params, function(error, data) {
    if (error) {
      context.fail(
        new Error('Fail. err:' + error)
      );
    } else {
      context.done(null, data);
    }
  });
};
