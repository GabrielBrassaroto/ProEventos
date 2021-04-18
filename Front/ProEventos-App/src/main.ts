import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) { /// seleciona se for producao
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)///vai pro appmodule e la tem todas as info
  .catch(err => console.error(err));/// mostra em vermelho o erro no console
