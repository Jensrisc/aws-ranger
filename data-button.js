// ==UserScript==
// @name         AWS Ranger – Data Upload
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Öffnet AWS Login mit Weiterleitung zum Data Upload
// @grant        none
// ==/UserScript==

window.onDataButtonClick = function () {
    const targetUrl = 'https://eu-west-1.console.aws.amazon.com/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/';
    const loginUrl = 'https://iad.merlon.amazon.dev/console';
    const params = new URLSearchParams({
        awsAccountId: '089910738259',
        awsPartition: 'aws',
        accountName: 'EURME-PredictiveAnalytics',
        sessionDuration: '43200',
        iamRole: 'arn:aws:iam::089910738259:role/S3_Ranger_Tech',
        redirect_uri: targetUrl
    });

    window.open(`${loginUrl}?${params.toString()}`, '_blank');
};
