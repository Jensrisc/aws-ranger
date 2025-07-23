(function () {
    'use strict';

    const loginBase = 'https://iad.merlon.amazon.dev/console?awsAccountId=089910738259&awsPartition=aws&accountName=EURME-PredictiveAnalytics&sessionDuration=43200&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech';
    const finalPrefix = 's3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/';

    window.onDataButtonClick = function () {
        const redirectScript = `
            <script>
            (function waitAndRedirect(){
                if(location.host.includes('console.aws.amazon.com')) {
                    const targetUrl = 'https://' + location.host + '/${finalPrefix}';
                    location.replace(targetUrl);
                } else {
                    setTimeout(waitAndRedirect, 200);
                }
            })();
            <\/script>
        `;
        const dataUrl = 'data:text/html;base64,' + btoa(redirectScript);
        const loginUrl = loginBase + '&redirect_uri=' + encodeURIComponent(dataUrl);
        window.open(loginUrl, '_blank', 'noopener');
    };
})();
