import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SzhouEc2VpcDay3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc
    const vpc = ec2.Vpc.fromLookup(this,'szhouvpc',{
      isDefault: true
    });
    // creating ec2 instance
    const szhouvm = new ec2.Instance(this, 'szhouvm1',{
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this,'szhoukey','splunk-key'),
      //       splunk-key is original key name of aws account
      // so you have to use the same
      instanceName: 'szhou-linux-vm'
      // above name of my linux machine
    });

    // printing instance ID
    new cdk.CfnOutput(this, 'szhouInstanceID', {
      description: 'This will print instance ID: ',
      value: szhouvm.instanceId,
    });
    // printing public dns
    new cdk.CfnOutput(this, 'szhouvmpublicdns',{
      description: 'This will print instance DNS name: ',
      value: szhouvm.instancePublicDnsName,
    });
    new cdk.CfnOutput(this, 'szhouvmpublicIp',{
      description: 'This will print instance public IP: ',
      value: szhouvm.instancePublicIp,
    });

  
  }
}

