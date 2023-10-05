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
