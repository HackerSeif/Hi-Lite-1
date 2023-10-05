let messages = [];
chrome.action.onClicked.addListener((tab) => {
    ...
    .catch(error => {
            console.error("Error posting to server:", error);
    });
});
chrome.tabs.query({active: true, currentWindow: true}, tabs => {
    ...
    fetch('http://localhost:3000/', {
        ...
    })
    ...
});
// Log any errors
if (chrome.runtime.lastError || !results || !results.length || results[0].error) {
    console.error(chrome.runtime.lastError || results[0].error || "No results returned");
    return;
}
