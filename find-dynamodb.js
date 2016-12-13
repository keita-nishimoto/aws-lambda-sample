'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

  const params = {
    TableName: 'users',
    FilterExpression : 'id = :val',
    ExpressionAttributeValues : {':val': event['userId']}
  };

  dynamo.scan(params, (error, data) => {
    if (error) {
      callback(
        Error('Fail. err:' + error)
      );
    } else {
      callback(null, data);
    }
  });
};
