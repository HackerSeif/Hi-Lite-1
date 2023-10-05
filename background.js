let messages = [];
chrome.action.onClicked.addListener((tab) => {
    ...
    .catch(error => {
            console.error("Error posting to server:", error);
    });
});
