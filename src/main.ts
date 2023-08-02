import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { InputComponent } from './app/ui/input/input.component';
import { MessagesComponent } from './app/messages/messages.component';
import { HeroesComponent } from './app/heroes/heroes.component';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

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

  const messagesElement = createCustomElement(MessagesComponent, {
    injector: app.injector,
  });
  customElements.define('dbs-messages', messagesElement);

})();
