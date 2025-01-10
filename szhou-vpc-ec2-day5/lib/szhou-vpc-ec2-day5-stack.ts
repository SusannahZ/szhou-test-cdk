import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SzhouVpcEc2Day5Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'SzhouVpc', {
      cidr: '10.5.0.0/24',
      maxAzs: 2,
      subnetConfiguration: [
        {
          cidrMask: 28,
          name: 'szhou-public-subnet',
          subnetType: ec2.SubnetType.PUBLIC,
        },
      ],
      vpcName: 'szhou-vpc',
    });

    
  }
}
