import { tracked } from '@glimmer/tracking';
import { setProperties } from '@ember/object';
import Service from '@ember/service';

import debug from 'debug';
const log = debug('twui-demo:local-data')
const warn = debug('twui-demo:local-data')
warn.log = console.warn.bind(console);

const lsKey = 'twui_demo_data';

class StuffWePersist {
  @tracked something = 'foo';
}

export default class LocalDataService extends Service {
  stuff = new StuffWePersist();

  constructor() {
    super(...arguments);
    this.initFromLocalStorage();
  }

  initFromLocalStorage() {
    const lsData = localStorage.getItem(lsKey);
    if (lsData) {
      try {
        const input = JSON.parse(lsData);
        setProperties(this.stuff, input); // TODO: since users can manipulate `localStorage` we should consider this as "user input" and sanitize
        log(`initFromLocalStorage parsed -->`, input);
      } catch(e) {
        warn(`Couldn't parse localStorage data:`, lsData);
      }
    }
  }

  saveToLocalStorage() {
    localStorage.setItem(lsKey, JSON.stringify(this.stuff));
    log(`saveToLocalStorage saved state -->`, this.stuff);
  }
}
