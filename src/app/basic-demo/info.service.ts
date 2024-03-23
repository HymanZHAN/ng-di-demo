import { Injectable } from '@angular/core';
import { HelloService } from './hello.service';

@Injectable()
export class InfoService {
  constructor() {}

  inform() {
    return 'This is InfoService.';
    // return this.hello.sayHello();
  }
}
