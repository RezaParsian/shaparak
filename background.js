var DELAY = 0.001;
var tabid_;


function notify(message) {
    if (message.Active) {
        restartAlarm(tabid_);
    }
}

browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!changeInfo.url) {
        return;
    }
    var gettingActiveTab = browser.tabs.query({ active: true, currentWindow: true });
    gettingActiveTab.then((tabs) => {
        if (tabId == tabs[0].id) {
            tabid_ = tabId;
        }
    });
});



function restartAlarm(tabId) {
    browser.pageAction.hide(tabId);
    browser.alarms.clearAll();
    var gettingTab = browser.tabs.get(tabId);
    gettingTab.then((tab) => {
        browser.alarms.create("", { delayInMinutes: DELAY });
    });
}

browser.alarms.onAlarm.addListener((alarm) => {
    var gettingActiveTab = browser.tabs.query({ active: true, currentWindow: true });
    gettingActiveTab.then((tabs) => {
        browser.pageAction.show(tabs[0].id);
    });
});

browser.runtime.onMessage.addListener(notify);