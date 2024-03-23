import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { InfoService } from './basic-demo/info.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), InfoService],
};
