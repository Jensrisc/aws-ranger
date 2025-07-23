// buttons.js
window.AwsButtons = {
    insertButtons: function(callbacks) {
        if (document.getElementById('cbm-button-wrapper')) return;

        const container = document.querySelector('.awsui_padding-box_k5dlb_1ct2y_146');
        if (!container || !container.parentElement) return;

        const wrapper = document.createElement('div');
        wrapper.id = 'cbm-button-wrapper';

        const createBtn = (label, key) => {
            const btn = document.createElement('button');
            btn.className = 'cbm-btn';
            btn.textContent = `Upload ${label}`;
            btn.onclick = () => {
                if (typeof callbacks[key] === 'function') {
                    callbacks[key]();
                } else {
                    console.warn(`Callback for ${key} not found!`);
                }
            };
            return btn;
        };

        wrapper.appendChild(createBtn('Data', 'data'));
        wrapper.appendChild(createBtn('Feedback', 'feedback'));

        container.parentElement.insertBefore(wrapper, container);
    }
};
