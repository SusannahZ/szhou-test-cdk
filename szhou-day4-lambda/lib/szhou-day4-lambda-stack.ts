import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SzhouDay4LambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloWorldFunction = new lambda.Function(this, 'HelloWorldFunction', {
      runtime: lambda.Runtime.PYTHON_3_9,
      code: lambda.Code.fromInline('def handler(event, context):\n    print("Hello, World!")\n    return {"statusCode": 200, "body": "Hello, World!"}'),
      handler: 'index.handler',
      functionName: 'SzhouHelloWorldFunction'
    });
  }
}
