# aws-lambda-sample
AWS Lambdaを利用した一番基本的なサンプルコード

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
以下のコマンドでデプロイ用zipファイルを作成します。

```
$ zip -r saveDynamoDb.zip save-dynamodb.js node_modules
```


## findDynamoDb

- find-dynamodb.js

DynamoDBからデータを1件取得するだけのサンプルです。
以下のコマンドでデプロイ用zipファイルを作成します。

```
zip -r findDynamoDb.zip find-dynamodb.js node_modules
```

## updateDynamoDb

- update-dynamodb.js

DynamoDBのデータを1件更新するだけのサンプルです。

## deleteDynamoDb

- delete-dynamodb.js

DynamoDBのデータを1件削除するだけのサンプルです。

## saveAccessToken

- save-access-token.js

カスタム認可の試験に利用するアクセストークン発行用。

事前の以下のテーブル作成が必要です。

- access_tokens
    - access_token String（プライマリー）

以下のコマンドでデプロイ用zipファイルを作成します。

```
zip -r saveAccessToken.zip save-access-token.js node_modules
```

## customAuthorize

- custom-authorize.js

AWS上でカスタム認可を利用する為のサンプルです。

サンプルなので認可ロジックはかなり雑です。

こちらの関数に関しては利用方法のサンプル等を[qiita](http://qiita.com/keita-nishimoto/items/3787b56bcd6bf709c10d) に投稿してあります。

## fetchQiitaScheme

- fetch-qiita-scheme.js

AWS LambdaからQiitaのJSONSchemeにアクセスするサンプルです。
※VPCの設定を行ったLambdaからのインターネット接続をテストする為に作りました。

以下のコマンドでデプロイ用zipファイルを作成します。

```
zip -r fetchQiitaScheme.zip fetch-qiita-scheme.js node_modules
```
