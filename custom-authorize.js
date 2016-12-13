'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

  const params = {
    TableName: 'access_tokens',
    FilterExpression : 'access_token = :val',
    ExpressionAttributeValues : {':val': '7bfb7815-d948-4343-82b9-964483f5dfbf'}
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
