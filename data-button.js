window.DataButton = {
    onClick: () => {
        const loginBase = 'https://iad.merlon.amazon.dev/console?awsAccountId=089910738259&awsPartition=aws&accountName=EURME-PredictiveAnalytics&sessionDuration=43200&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech';
        wait(1000);
        const currentHost = window.location.host;
        const targetUrl = `https://${currentHost}/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/`;
        const finalUrl = `${loginBase}&redirect_uri=${encodeURIComponent(targetUrl)}`;
        window.open(finalUrl, '_blank');
    }
};
