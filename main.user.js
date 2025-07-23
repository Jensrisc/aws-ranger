// ==UserScript==
// @name         AWS Ranger Navigator – Modular mit Token
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Modularer AWS Upload Buttons mit dynamischem Token pro Button
// @match        https://iad.merlon.amazon.dev/*
// @grant        GM_addStyle
// @require      https://cdn.jsdelivr.net/gh/DEIN_GITHUB_USERNAME/aws-ranger-navigator-modular/buttons.js
// @require      https://cdn.jsdelivr.net/gh/DEIN_GITHUB_USERNAME/aws-ranger-navigator-modular/data-button.js
// @require      https://cdn.jsdelivr.net/gh/DEIN_GITHUB_USERNAME/aws-ranger-navigator-modular/feedback-button.js
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        #cbm-button-wrapper {
            display: flex;
            gap: 8px;
            margin-bottom: 12px;
        }
        .cbm-btn {
            background-color: #0073bb;
            color: white;
            border: none;
            padding: 6px 12px;
            font-size: 13px;
            border-radius: 4px;
            cursor: pointer;
        }
        .cbm-btn:hover {
            background-color: #005f8e;
        }
    `);

    function insertButtons() {
        AwsButtons.insertButtons({
            data: () => window.DataButton.onClick(),
            feedback: () => window.FeedbackButton.onClick()
        });
    }

    const observer = new MutationObserver(insertButtons);
    observer.observe(document.body, { childList: true, subtree: true });

    insertButtons();

})();
