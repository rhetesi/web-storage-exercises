'use strict';

// CookieHandler

const cookieHandler = {
    setCookie(name, value, expirationMin = 60, path = '/') {
        const now = new Date();
        now.setMinutes(now.getMinutes() + expirationMin);
        const expires = now.toUTCString();
        document.cookie = `${name}=${value};expires=${expires};path=${path}`;
    },
    getCookie(name) {
        const keyValuePairs = document.cookie
            .split('; ')
            .find(cookie => cookie.startsWith(`${name}=`))
        return keyValuePairs ? keyValuePairs.split('=')[1] : '';
    },
    checkCookie(name) {
        const exists = cookieHandler.getCookie(name);
        return exists ? true : false;
    },
    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    },
};

// 1. feladat
/*
Tárold el az alábbi értéket egy token nevű, httpOnly cookie-ba, ami 15 perc után lejár: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
*/

cookieHandler.setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c', 15);


// 2. feladat
/*
Az alábbi cookie-k vannak a böngésződben tárolva (hozd létre őket):

viewed: 5
uid: 354774631237
ssid: Bx55OWbHJ0Vt_IGIFÍ

Írj egy olyan objectet, amely az alábbi három metódust megvalósítja: - kiolvassa a sütik nevét, és értékét - átmenti őket sessionStorage-be - törli a sütiket
*/