function attach(elem) {
    console.log(elem);
    elem.style.border = '1px solid red';
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

window.addEventListener('load', function() {
    scanAndInitialize();
    const observer = new MutationObserver(list => {
        console.log("mutation list", list);
        document.body.dispatchEvent(evt);
    });
});