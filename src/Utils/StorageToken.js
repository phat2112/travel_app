export const storageCookie = (name, tokenValue, days) => {
    let expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (tokenValue || "")  + expires + "; path=/";
}

export const getCookieStorage = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export const eraseCookie = (name) => {
    document.cookie = name+'=; Max-Age=-99999999;';  
}

export const storageSession = (tokenName, tokenValue) => {
    sessionStorage.setItem(tokenName, tokenValue)
}

export const getSessionToken = tokenValue => {
    sessionStorage.getItem(tokenValue)
}

export const clearToken = () => {
    sessionStorage.clear()
}