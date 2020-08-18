import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NavMainComponent extends Component {
  @tracked isMobileNavOpen = false;
  @service router;

  @action
  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }
}
