// ==UserScript==
// @name         AWS Ranger – Upload Buttons UI
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fügt Upload-Buttons ein
// @grant        GM_addStyle
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
        if (document.getElementById('cbm-button-wrapper')) return;

        const container = document.querySelector('.awsui_padding-box_k5dlb_1ct2y_146');
        if (!container || !container.parentElement) return;

        const wrapper = document.createElement('div');
        wrapper.id = 'cbm-button-wrapper';

        const createBtn = (label, handlerFn) => {
            const btn = document.createElement('button');
            btn.className = 'cbm-btn';
            btn.textContent = `Upload ${label}`;
            btn.onclick = handlerFn;
            return btn;
        };

        wrapper.appendChild(createBtn('Data', window.onDataButtonClick));
        wrapper.appendChild(createBtn('Feedback', window.onFeedbackButtonClick));

        container.parentElement.insertBefore(wrapper, container);
    }

    const observer = new MutationObserver(insertButtons);
    observer.observe(document.body, { childList: true, subtree: true });
})();
