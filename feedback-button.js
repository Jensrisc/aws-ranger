window.FeedbackButton = {
    onClick: () => {
        const loginBase = 'https://iad.merlon.amazon.dev/console?awsAccountId=089910738259&awsPartition=aws&accountName=EURME-PredictiveAnalytics&sessionDuration=43200&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech';
        const target = 'https://eu-west-1.console.aws.amazon.com/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=feedback/';
        const redirectLink = `${loginBase}&redirect_uri=${encodeURIComponent(target)}`;
        window.open(redirectLink, '_blank');
    }
};
