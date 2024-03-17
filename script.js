'use strict';

function redirectToUrl() {
    const input = document.getElementById('linkInput');
    let url = input.value.trim();

    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'http://' + url;
    }
    
    window.location.href = url;
}
