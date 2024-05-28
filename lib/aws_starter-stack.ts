import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsStarterStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucketName = 'mybucketdev';

    let bucketDev: s3.IBucket;
    try {
      bucketDev = s3.Bucket.fromBucketName(this, 'MyBucketDev', bucketName);
    } catch {
      bucketDev = new s3.Bucket(this, 'MyBucketDev', {
        versioned: true,
        bucketName: bucketName,
      });
    }
  }
}
