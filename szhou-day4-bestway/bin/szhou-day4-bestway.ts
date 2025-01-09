#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SzhouDay4BestwayStack } from '../lib/szhou-day4-bestway-stack';
import { SzhouDay4Ec2all } from '../lib/szhou-day4-ec2all';

const app = new cdk.App();
new SzhouDay4BestwayStack(app, 'SzhouDay4BestwayStack', {

  env: { account: '992382386705', region: 'us-east-1' },
});

new SzhouDay4Ec2all(app, 'SzhouDay4Ec2all', {

  env: { account: '992382386705', region: 'us-east-1' },
});