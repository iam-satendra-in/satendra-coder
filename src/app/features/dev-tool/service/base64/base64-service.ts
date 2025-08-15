import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {
  
  encode(input: string): string {
    return btoa(unescape(encodeURIComponent(input)));
  }

  decode(base64: string): string {
    try {
      return decodeURIComponent(escape(atob(base64)));
    } catch {
      return 'Invalid Base64 String';
    }
  }
}