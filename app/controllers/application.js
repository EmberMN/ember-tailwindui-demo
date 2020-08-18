import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service localData; // TODO: We don't actually use this (yet)

  navigation = {
    mainItems: [{
      text: 'Home',
      route: 'index'
    }, {
      text: 'Feature',
      route: 'feature'
    }, {
      text: 'Table',
      route: 'table'
    }],
    userMenuItems: [{
      text: 'Settings',
      route: 'settings'
    }, {
      text: 'Sign out',
      route: 'sign-out'
    }]
  };
}
