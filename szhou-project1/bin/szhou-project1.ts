#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SzhouProject1Stack } from '../lib/szhou-project1-stack';
import { CreateS3Buckets } from '../lib/create-s3-buckets';

const app = new cdk.App();
new SzhouProject1Stack(app, 'SzhouProject1Stack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  env: { account: '992382386705', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});

new CreateS3Buckets(app, 'CreateS3Buckets', {
  env: { account: '992382386705', region: 'us-east-1' },
});