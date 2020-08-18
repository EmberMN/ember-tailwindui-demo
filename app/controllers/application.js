import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

// TODO: Not sure if it really makes sense to mark these as tracked because:
//       1. We'll probably keep it constant
//       2. I don't think @tracked deeply inspects arrays or objects
//       3. ...profit?
class NavigationData {
  @tracked mainItems = [];
  @tracked userMenuItems = [];
}

export default class ApplicationController extends Controller {
  @service router;
  @service localData;

  navigation = new NavigationData();
  constructor() {
    super(...arguments);

    this.navigation.mainItems = [{
      text: 'Home',
      route: 'index'
    }, {
      text: 'Feature',
      route: 'feature'
    }, {
      text: 'Table',
      route: 'table'
    }];

    this.navigation.userMenuItems = [{
      text: 'Settings',
      route: 'settings'
    }, {
      text: 'Sign out',
      route: 'sign-out'
    }];
  }
}
