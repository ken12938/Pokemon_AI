chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    console.log("received");
    if (request.action != null){
        chrome.storage.local.set({"key": "value"}, function() {
            console.log('Value is set to ' + "value");
        });
    }
  });
