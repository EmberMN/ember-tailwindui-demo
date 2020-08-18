import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NavMainComponent extends Component {
  @tracked isMobileNavOpen = false;

  @action
  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
}
