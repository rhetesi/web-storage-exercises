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

cookieHandler.setCookie('viewed', '5');
cookieHandler.setCookie('uid', '354774631237');
cookieHandler.setCookie('ssid', 'Bx55OWbHJ0Vt_IGIFÍ');

const cookieToSessionStorage = {
    getCookie(name) {
        return cookieHandler.getCookie(name);
        //console.log(cookieHandler.getCookie(name));
    },
    toSStorage(name, value) {
        sessionStorage.setItem(name, value);
    },
    delCookie(name) {
        cookieHandler.deleteCookie(name);
    },
    moveToSession(name) {
        const value = this.getCookie(name);
        this.delCookie(name);
        this.toSStorage(name, value);
    },
}

cookieToSessionStorage.moveToSession('viewed');
cookieToSessionStorage.moveToSession('uid');
cookieToSessionStorage.moveToSession('ssid');



// 3. feladat
/*
Adott egy json file, ami valójában egy tömb, lastName, firstName propertyket tartalmazó objektumokkal.
Írj egy függvényt, ami indít egy ajax kérést, ami elkéri a json tartalmát, és a firstName, lastName párosokat egymás alá beleírja egy div-en belüli p-tagekbe, és létrehoz egy users nevű bejegyzés a localStorage-be, ahol a json tartalmát letárolja.
Módosítsd a függvényt úgy, hogy amennyiben a localStorage-ba van users bejegyzés, úgy onnan olvassa ki az adatokat, ha nincs csak akkor küldjön ajax kérést.
*/

