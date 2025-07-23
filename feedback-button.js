// ==UserScript==
// @name         AWS Ranger Feedback Button
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Öffnet AWS-Login und navigiert nach erfolgreicher Weiterleitung zur Feedback-S3-Upload-URL
// @grant        none
// ==/UserScript==

window.onFeedbackButtonClick = function () {
    const loginUrl = 'https://iad.merlon.amazon.dev/console?awsAccountId=089910738259&awsPartition=aws&accountName=EURME-PredictiveAnalytics&sessionDuration=43200&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech';

    const win = window.open(loginUrl, '_blank');

    const checkInterval = setInterval(() => {
        try {
            if (win && win.location && win.location.href.includes("console.aws.amazon.com/console/home")) {
                const tokenHost = win.location.host;
                const finalUrl = `https://${tokenHost}/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=feedback/`;

                win.location.href = finalUrl;
                clearInterval(checkInterval);
            }
        } catch (e) {
            // CORS blockt Zugriff solange Login nicht durch ist – das ist gewollt
        }
    }, 1000);
};
