# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template


differnet python code for the lambda function in szhou-project1 stack


import time
import boto3
def handler(event, context):
  s3 = boto3.client('s3')
  response = s3.list_buckets()
  buckets = [bucket['Name'] for bucket in response['Buckets']]
  for bucket in response['Buckets']:
    print(bucket['Name'])
  print("S3 Buckets:", buckets)
  dynamodb = boto3.resource('dynamodb')
  table = dynamodb.Table('szhou-table')
  for bucket in buckets:
    table.put_item(Item={'BucketName': bucket})
  return {
    'statusCode': 200,
    'body': 'S3 Buckets: ' + ', '.join(buckets)
  }




import json
import boto3

def handler(event, context):
  s3 = boto3.client('s3')
  response = s3.list_buckets()
  buckets = [bucket['Name'] for bucket in response['Buckets']]
  for bucket in response['Buckets']:
      print(bucket['Name'])
  print("S3 Buckets:", buckets)
  dynamodb = boto3.resource('dynamodb')
  table = dynamodb.Table('szhou-table')
  for bucket in buckets:
      table.put_item(Item={'BucketName': bucket})
  return {
      'statusCode': 200,
      'body': json.dumps('S3 Buckets: ' + ', '.join(buckets))
  }


