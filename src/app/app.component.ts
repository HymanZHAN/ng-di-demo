import { Component } from '@angular/core';
import { InfoDemoComponent } from './basic-demo/info-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-info-demo />`,
  imports: [InfoDemoComponent],
})
export class AppComponent {}
