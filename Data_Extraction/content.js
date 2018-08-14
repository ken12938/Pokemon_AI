var jqueryScript = document.createElement('script');
jqueryScript.src = chrome.extension.getURL('jquery-3.3.1.min.js');
jqueryScript.onload = function() {
    console.log("Injected jquery");
    
    var s = document.createElement('script');
    s.src = chrome.extension.getURL('battle_extract.js');
    s.onload = function() {
        console.log("Injected Battle Extract");
        s.remove();
    }.bind(s);
    (document.head || document.documentElement).appendChild(s);
    jqueryScript.remove();
}.bind(document).bind(jqueryScript);
(document.head || document.documentElement).appendChild(jqueryScript);