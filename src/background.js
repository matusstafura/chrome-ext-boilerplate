chrome.tabs.onUpdated.addListener(function () {
  toggleIcon();
});

chrome.tabs.onActivated.addListener(function () {
  toggleIcon();
});

function toggleIcon() {
  chrome.browserAction.setIcon({ path: "icons/inactive-16.png" });
}
