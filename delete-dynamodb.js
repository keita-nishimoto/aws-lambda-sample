'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

  const params = {
    TableName: 'users',
    Key: {
      "id": event['userId']
    }
  };

  dynamo.delete(params, (error) => {
    if (error) {
      callback(new Error('Fail. err:' + error));
    } else {
      callback(null);
    }
  });
};
