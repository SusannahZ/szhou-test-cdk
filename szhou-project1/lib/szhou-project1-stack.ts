import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

// import * as sqs from 'aws-cdk-lib/aws-sqs';



/**
 * Represents the SzhouProject1Stack which extends the AWS CDK Stack.
 * This stack defines an AWS Lambda function that lists all S3 buckets
 * and stores their names in a DynamoDB table. The Lambda function is
 * scheduled to run every 3 minutes using an EventBridge rule.
 *
 * Resources created:
 * - AWS Lambda function (`szhou-sample-function`)
 * - IAM policies to allow the Lambda function to list S3 buckets and write to DynamoDB
 * - EventBridge rule to trigger the Lambda function every 3 minutes
 * - DynamoDB table (`szhou-table`) with a partition key `BucketName`
 *
 * @param {Construct} scope - The scope in which this stack is defined
 * @param {string} id - The scoped construct ID
 * @param {cdk.StackProps} [props] - Stack properties
 */
export class SzhouProject1Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const szhouSampleFunction = new lambda.Function(this, 'SzhouSampleFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      functionName: 'szhou-sample-function',
      code: lambda.Code.fromInline(`
import time 
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('szhou-table')
def handler(event, context):
    s3 = boto3.client('s3')
    response = s3.list_buckets()
    buckets = [bucket['Name'] for bucket in response['Buckets']]
    print("S3 Buckets:", buckets)
    
    for bucket in buckets:
      table.put_item(Item={'BucketName': bucket})
    
    return {
      'statusCode': 200,
      'body': 'S3 Buckets: ' + ', '.join(buckets)
    }
      `),
      handler: 'index.handler',
    });

    // allow lambda function to list s3 buckets
    szhouSampleFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['s3:ListAllMyBuckets'],
      resources: ['*'],
    }));

    // allow lambda function to print to cloudwatch logs
    const rule = new events.Rule(this, 'Rule', {
      schedule: events.Schedule.rate(cdk.Duration.minutes(3)),
    });

    rule.addTarget(new targets.LambdaFunction(szhouSampleFunction));
    const table = new dynamodb.Table(this, 'SzhouDynamoDB', {
      tableName: 'szhou-table',
      partitionKey: { name: 'BucketName', type: dynamodb.AttributeType.STRING },
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
    });
    
    // allow lambda function to write to dynamodb table
    szhouSampleFunction.addToRolePolicy(new iam.PolicyStatement({
      actions: ['dynamodb:PutItem'],
      resources: [table.tableArn],
    }));

  }
}
