'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();
const uuid = require('node-uuid');

exports.handler = (event, context, callback) => {

  const params = {
    TableName: 'access_tokens',
    Item: {
      access_token: uuid.v4()
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
