import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'hammerjs';
import { interval } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => {
    console.error(err);
  });

// const values$ = of(1, 2, 3, 4, 5, 6);
const values2$ = interval(1000);

values2$
  .pipe(
    filter(num => num % 3 === 0),
    map(num => num * 2)
  )
  .subscribe((num: number) => {
    console.log(num);
  });
