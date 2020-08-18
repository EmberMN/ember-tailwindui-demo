import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

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
      text: 'Table',
      route: 'index'
    }];
    this.navigation.userMenuItems = [{
      text: 'Profile',
      route: 'index'
    }, {
      text: 'Settings',
      route: 'index'
    }, {
      text: 'Sign out',
      route: 'index'
    }];
  }
}
