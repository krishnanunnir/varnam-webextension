var browser = browser || chrome;

function attach(elem) {
    elem.dataset.varnam = true;
    var tributeComplete = new TributeComplete(elem);
}

function scanAndInitialize() {
    // Attach swanalekha to input boxes
    let inputs = [...document.getElementsByTagName('input')];
    inputs.forEach((elem) => {
        let type = elem.getAttribute('type');
        if (type == 'text' || type == 'search') {
            attach(elem);
        }
    });
    // Attach swanalekha to text areas
    let textarea = [...document.getElementsByTagName('textarea')];
    textarea.forEach((elem) => attach(elem));

    // Attach swanalekha to contenteditables
    let ce = document.querySelectorAll('[contenteditable]');
    ce.forEach((elem) => attach(elem));
}
browser.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        let activeElement = document.activeElement;
        if (!activeElement.dataset.varnam) {
            // New elements added to page?
            scanAndInitialize();
        }
        activeElement.dispatchEvent(new Event('varnam-toggle'));

    }
);