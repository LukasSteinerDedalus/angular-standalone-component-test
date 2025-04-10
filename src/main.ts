import { bootstrapApplication, createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { InputComponent } from './app/ui/input/input.component';
import { MessagesComponent } from './app/messages/messages.component';
import { HeroesComponent } from './app/heroes/heroes.component';

import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HeroSearchComponent } from './app/hero-search/hero-search.component';
import { DashboardComponent } from './app/dashboard/dashboard.component';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // bootstrapApplication(AppComponent, {
  //   providers: [provideHttpClient()],
  // }).catch((err) => console.error(err));

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const inputElement = createCustomElement(InputComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-input', inputElement);

  const heroesElement = createCustomElement(HeroesComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-heroes', heroesElement);

  const heroDetailElement = createCustomElement(HeroesComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-detail', heroDetailElement);

  const heroSearchElement = createCustomElement(HeroSearchComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-search', heroSearchElement);

  const messagesElement = createCustomElement(MessagesComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-messages', messagesElement);

  const dashboardElement = createCustomElement(DashboardComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-dashboard', dashboardElement);

})();
