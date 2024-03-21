import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { references } from './app.references';
import { routes } from './app.routes';
import { ReferencesService } from './references/references.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    ReferencesService.forRoot({ references }),
    provideAnimationsAsync(),
  ],
};
