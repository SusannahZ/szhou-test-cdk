#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { SzhouCdkStack } from '../lib/szhou-cdk-stack';

const app = new cdk.App();
new SzhouCdkStack(app, 'SzhouCdkStack', {});