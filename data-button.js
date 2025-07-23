// data-button.js

function getTokenFromUrl() {
    const hostname = window.location.hostname; 
    const parts = hostname.split('.');
    return parts.length > 0 ? parts[0] : null;
}

window.DataButton = {
    loginBaseTemplate: 'https://{token}.eu-west-1.console.aws.amazon.com/console?awsAccountId=089910738259&awsPartition=aws&accountName=EURME-PredictiveAnalytics&sessionDuration=43200&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech',

    targetUrl: 'https://eu-west-1.console.aws.amazon.com/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/',

    onClick: function() {
        const token = getTokenFromUrl();
        if(!token) {
            alert('Token konnte nicht ermittelt werden!');
            return;
        }
        const loginBase = this.loginBaseTemplate.replace('{token}', token);
        const redirectLink = `${loginBase}&redirect_uri=${encodeURIComponent(this.targetUrl)}`;
        window.open(redirectLink, '_blank');
    }
};
