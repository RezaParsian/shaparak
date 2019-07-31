browser.runtime.sendMessage({ "Active": true });

var body = document.body;
var div = document.createElement('div');
div.id = "rp76";
div.style.background = "#4CAF50";
div.style.width = "100%";
div.style.textAlign = "center";
div.style.color = "white";
div.style.fontSize = "28px";
div.style.position = "absolute";
div.style.top = "0";
div.innerHTML = "سایت معتبر است!";

body.appendChild(div);