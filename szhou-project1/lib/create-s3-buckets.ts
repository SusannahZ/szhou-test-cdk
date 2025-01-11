import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class CreateS3Buckets extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    for (let i = 1; i <= 5; i++) {
        new s3.Bucket(this, `szhou-bucket-${i}`, {
            bucketName: `szhou-bucket-${i}`
        });
    }
  }
}

