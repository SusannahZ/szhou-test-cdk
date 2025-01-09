import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SzhouDay4Ec2all extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // using default vpc
    const vpc = ec2.Vpc.fromLookup(this,'szhouvpc',{
      isDefault: true
    });

    // create a security group
    const securityGroup = new ec2.SecurityGroup(this, 'szhouSecurityGroup', {
      vpc,
      description: 'Allow SSH and HTTP access to ec2 instances',
      allowAllOutbound: true,
      securityGroupName: 'szhouSecurityGroup'
    });

    // allow inbound SSH access on port 22
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'allow SSH access from anywhere');
    // allow inbound HTTP access on port 443
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'allow HTTPS access from anywhere');
    // allow inbound HTTP access on port 80
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'allow HTTP access from anywhere');
    // allow inbound FTP access on port 21
    securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(21), 'allow FTP access from anywhere');
    // creating ec2 instance
    const szhouvm = new ec2.Instance(this, 'szhouvm1',{
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
      keyPair: ec2.KeyPair.fromKeyPairName(this,'szhoukey','splunk-key'),
      //       splunk-key is original key name of aws account
      // so you have to use the same
      instanceName: 'szhou-linux-vm',
      // above name of my linux machine
      securityGroup: securityGroup
    });
    // printing instance ID
    new cdk.CfnOutput(this, 'szhouInstanceID', {
      description: 'This will print instance ID: ',
      value: szhouvm.instanceId,
    });
    // printing instance DNS name
    new cdk.CfnOutput(this, 'szhouInstanceDNS', {
      description: 'This will print instance DNS name: ',
      value: szhouvm.instancePublicDnsName,
    });
  }
}
