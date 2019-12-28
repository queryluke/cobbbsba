function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
    }
    return urlparameter;
}

function isDM() {
    var isDM = localStorage.getItem('dmHere');
    if (isDM) {
        showSecrets();
    } else {
        var password = getUrlParam('dm','false');
        if (password && password.hashCode() === 2084171680) {
            localStorage.setItem('dmHere', true);
            showSecrets();
        }
    }
}

function showSecrets() {
    var hidden = document.querySelector('.hidden');
    if (hidden) {
      hidden.classList.remove('hidden');
    }
}


String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr   = this.charCodeAt(i);
        hash  = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

document.addEventListener("DOMContentLoaded", function() {
    isDM();
});