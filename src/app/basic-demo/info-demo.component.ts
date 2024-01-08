import { Component, inject } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-info-demo',
  standalone: true,
  imports: [],
  template: `
    <p>
      Info: <code>{{ info }}</code>
    </p>
  `,
  styles: ``,
})
export class InfoDemoComponent {
  info: string;

  constructor(private service: InfoService) {
    this.info = service.inform();
  }
}
