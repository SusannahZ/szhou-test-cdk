import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SzhouDay4BestwayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // define an array with 2 bucket names
    const bucketNames = ['szhou-day4-bestway-bucket00001', 'szhou-day4-bestway-bucket00002'];
    // loop through the array and create 2 buckets
    bucketNames.forEach((bucketName) => {
      new s3.Bucket(this, bucketName, {
        versioned: true,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        autoDeleteObjects: true,
        bucketName: bucketName
      });
    });
    // create an S3 bucket
    // const bucket = new s3.Bucket(this, 'MyBucket', {
    //   versioned: true,
    //   removalPolicy: cdk.RemovalPolicy.DESTROY,
    //   autoDeleteObjects: true,
    //   bucketName: 'szhou-day4-bestway-bucket00001'
    // });
  }
}
