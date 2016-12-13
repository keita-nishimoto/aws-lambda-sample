'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuid = require('node-uuid');

exports.handler = (event, context, callback) => {

  const params = {
    TableName: 'users',
    Item: {
      id: uuid.v4(),
      email: event['email']
    }
  };

  dynamo.put(params, (error) => {
    if (error) {
      callback(
        new Error('Fail. err:' + error)
      );
    } else {
      callback(null, params);
    }
  });
};
