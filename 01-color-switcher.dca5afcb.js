!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")};t.btnStart.addEventListener("click",(function(){return t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n)}));var n=null}();
//# sourceMappingURL=01-color-switcher.dca5afcb.js.map
