import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';


export class SzhouS3L2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   // creating s3 bucket using L2 constructor 
   const szhoubkt = new s3.Bucket(this,'szhouL2', {
    bucketName: 'szhou-bucket-usingl00002',
    versioned: true,
    removalPolicy: cdk.RemovalPolicy.DESTROY // on cdk destroy it will delete bucket
   
   });
  }
}

// anoth class for one more bucket 
export class SzhouS3L2NewStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

   // creating s3 bucket using L2 constructor 
   const szhoubkt1 = new s3.Bucket(this,'szhouL21' , {
    bucketName: 'szhou-bucket-usingl000021',
    versioned: true,
    removalPolicy: cdk.RemovalPolicy.DESTROY // on cdk destroy it will delete bucket
   
   });
  }
}

