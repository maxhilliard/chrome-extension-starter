chrome.runtime.onInstalled.addListener(() => {
  // Persist some data to storage
  chrome.storage.sync.set({ color: "#3aa757" }, () => {
    console.log("The color is green.");
  });

  // Define when page actions are available
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "developer.chrome.com" }
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
