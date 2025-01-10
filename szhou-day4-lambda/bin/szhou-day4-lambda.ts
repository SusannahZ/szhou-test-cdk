#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SzhouDay4LambdaStack } from '../lib/szhou-day4-lambda-stack';

const app = new cdk.App();
new SzhouDay4LambdaStack(app, 'SzhouDay4LambdaStack', {
  env: { account: '992382386705', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});