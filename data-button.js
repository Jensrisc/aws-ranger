// ==UserScript==
// @name         AWS Ranger – Data Upload
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Öffnet den Login-Link mit Weiterleitung zur Data-Upload-Seite
// @grant        none
// ==/UserScript==

window.onDataButtonClick = function () {
    const loginUrl = 'https://iad.merlon.amazon.dev/console';
    const params = new URLSearchParams({
        awsAccountId: '089910738259',
        awsPartition: 'aws',
        accountName: 'EURME-PredictiveAnalytics',
        sessionDuration: '43200',
        iamRole: 'arn:aws:iam::089910738259:role/S3_Ranger_Tech',
        redirect_uri: 'https://eu-west-1.console.aws.amazon.com/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/'
    });

    const finalUrl = `${loginUrl}?${params.toString()}`;
    window.open(finalUrl, '_blank');
};
