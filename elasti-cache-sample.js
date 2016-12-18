const request = require('request');
const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

const headers = {
  'Content-Type':'application/json'
};

const options = {
  url: 'http://qiita.com/api/v2/schema',
  method: 'GET',
  headers: headers
};

exports.handler = (event, context, callback) => {

  /*
  request(options, (error, response, body) => {
    console.log(body);
    callback(
      null,
      response
    );
  });
  */

  const params = {
    TableName: 'access_tokens',
    FilterExpression : 'access_token = :val',
    ExpressionAttributeValues : {':val': 'e4459aca-f01e-4a27-add0-05181ddc4122'}
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
