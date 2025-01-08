#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SzhouEc2VpcDay3Stack } from '../lib/szhou-ec2vpc-day3-stack';

const app = new cdk.App();
new SzhouEc2VpcDay3Stack(app, 'SzhouEc2VpcDay3Stack', {

  env: { account: '992382386705', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});