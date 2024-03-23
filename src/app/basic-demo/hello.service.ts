import { Injectable } from '@angular/core';
import hljs from 'highlight.js';

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  sayHello() {
    // return 'Hello, World!';
    const langs = hljs.listLanguages();
    return langs.toString();
  }
}
