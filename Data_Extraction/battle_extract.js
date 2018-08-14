console.log("Reached battle_extract.js");
$("#fsr span").text($("#fsr span").text().replace("Privacy", "WAEIOGHAWOI"));

chrome.storage.local.set({"key": "value"}, function() {
    console.log('Value is set to ' + "value");
});
console.log("Exiting battle_extract.js");