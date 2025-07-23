(function () {
    'use strict';

    const loginUrl = 'https://iad.merlon.amazon.dev/console' +
        '?awsAccountId=089910738259' +
        '&awsPartition=aws' +
        '&accountName=EURME-PredictiveAnalytics' +
        '&sessionDuration=43200' +
        '&iamRole=arn:aws:iam::089910738259:role/S3_Ranger_Tech';

    const button = document.createElement('button');
    button.textContent = 'Upload Data';
    button.style = 'margin: 6px; padding: 8px; background: #0073bb; color: white; border: none; border-radius: 4px;';
    button.onclick = () => {
        const redirectTarget = `https://${window.location.host}/s3/upload/ranger-production?region=eu-west-1&bucketType=general&prefix=data/`;
        const fullLogin = `${loginUrl}&redirect_uri=${encodeURIComponent(redirectTarget)}`;
        window.open(fullLogin, '_blank');
    };

    waitForContainer(container => container.appendChild(button));

    function waitForContainer(callback) {
        const observer = new MutationObserver(() => {
            const target = document.querySelector('.awsui_padding-box_k5dlb_1ct2y_146');
            if (target && target.parentElement && !document.querySelector('.cbm-btn-data')) {
                observer.disconnect();
                callback(target.parentElement);
            }
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }
})();
