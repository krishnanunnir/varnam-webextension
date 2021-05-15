var browser = browser || chrome;

function toggle() {
    // send message to the current active tab
    browser.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let lastTabId = tabs[0].id;
        browser.tabs.sendMessage(lastTabId, { message: 'toggle' });
    });
}

browser.browserAction.onClicked.addListener(() => {
    toggle();
});

browser.commands.onCommand.addListener(function(command) {
    console.log(command);
    if (command == 'varnam-toggle') {
        toggle();
    }
});