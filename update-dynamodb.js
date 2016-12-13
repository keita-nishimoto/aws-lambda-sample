'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

  const params = {
    TableName: 'users',
    Item: {
      id: event['userId'],
      email: event['email']
    }
  };

  dynamo.put(params, (error) => {
    if (error) {
      callback(new Error('Fail. err:' + error));
    } else {
      callback(null, params);
    }
  });
};
