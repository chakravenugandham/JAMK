import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  setItem = function (key: any, data: any) {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), this.clientPhrase);
    localStorage.setItem(key, ciphertext);
}
getItem = function (key: any) {
    var ciphertext = localStorage.getItem(key);
    if (ciphertext) {
        try {
            var bytes = CryptoJS.AES.decrypt(ciphertext.toString(), this.clientPhrase);
            var data = bytes.toString(CryptoJS.enc.Utf8);
            var decryptedData = data && JSON.parse(data);
            return ((decryptedData) ? decryptedData : null);
        } catch (e) {
            return null;
        }
    } else {
        return null;
    }
}
}
