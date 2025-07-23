// ==UserScript==
// @name         AWS Ranger Data Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Data Upload Button mit Login-Redirect
// @grant        none
// ==/UserScript==

window.onDataButtonClick = function () {
    const currentHost = window.location.host; // dynamischer Token-Host
    const targetUrl = `https://${currentHost}/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/`;

    const loginBase = 'https://iad.merlon.amazon.dev/console?awsAccountId=089910738259&awsPartition=aws&accountName=EURME-PredictiveAnalytics&sessionDuration=43200&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech';

    const loginUrl = `${loginBase}&redirect_uri=${encodeURIComponent(targetUrl)}`;

    window.open(loginUrl, '_blank');
};
