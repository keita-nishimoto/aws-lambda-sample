'use strict';

const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {

  const accessToken = event.authorizationToken;

  const params = {
    TableName: 'access_tokens',
    FilterExpression : 'access_token = :val',
    ExpressionAttributeValues : {':val': accessToken}
  };

  dynamo.scan(params, (error, data) => {

    if (accessToken === 'unauthorized') {
      callback(
        new Error('Unauthorized')
      )
    }

    if (error) {
      callback(
        new Error('Fail. err:' + error)
      );
    } else {
      if (data['Items'].length === 0) {
        callback(
          null,
          generatePolicy('user', 'Deny', event.methodArn)
        );
      } else {
        callback(
          null,
          generatePolicy('user', 'Allow', event.methodArn)
        );
      }
    }
  });
};

/**
 * ポリシーを生成する
 *
 * @param principalId
 * @param effect
 * @param resource
 * @returns {{}}
 */
const generatePolicy = function(principalId, effect, resource) {
  const authResponse = {};
  authResponse.principalId = principalId;
  if (effect && resource) {
    const policyDocument = {};
    policyDocument.Version = '2012-10-17'; // default version
    policyDocument.Statement = [];
    const statementOne = {};
    statementOne.Action = 'execute-api:Invoke'; // default action
    statementOne.Effect = effect;
    statementOne.Resource = resource;
    policyDocument.Statement[0] = statementOne;
    authResponse.policyDocument = policyDocument;
  }
  return authResponse;
};
