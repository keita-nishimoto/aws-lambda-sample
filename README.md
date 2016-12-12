# aws-lambda-sample
AwsLambdaを利用した一番基本的なサンプルコード

事前の以下のテーブル作成が必要です。

- users
    - id String（プライマリー）
    - email String

※実用に耐える物ではない、あくまで本当に基本的なサンプルです。

## デプロイ方法

プロジェクトルートで以下を実行しzipファイルを作成します。

save-dynamodb.jsの部分には対象のLambdaFunction名が入ります。
この例だと、LambdaFunctionのhandlerは「save-dynamodb.handler」になります。

```
$ zip -r saveDynamoDb.zip save-dynamodb.js node_modules
```

作成したzipファイルをcliなりAWSのマネジメントコンソールからアップロードして下さい。

## saveDynamoDb

- save-dynamodb.js

DynamoDBにデータを1件入れるだけのサンプルです。


