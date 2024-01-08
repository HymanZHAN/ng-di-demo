import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  inform() {
    return 'This is InfoService.';
  }
}
