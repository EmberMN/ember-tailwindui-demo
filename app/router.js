import EmberRouter from '@ember/routing/router';
import config from 'ember-tailwindui-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('feature');
  this.route('table');
  this.route('settings');
  this.route('sign-out');
});
