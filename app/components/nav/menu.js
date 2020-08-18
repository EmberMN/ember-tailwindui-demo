import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';

const transitions = {
  entering: 'transition ease-out duration-100',
  leaving: 'transition ease-in duration-75',
};

const transforms = {
  opaque: 'transform opacity-100 scale-100',
  transparent: 'transform opacity-0 scale-95',
}

const displayStates = {
  entering: [transitions.entering, transforms.opaque].join(' '),
  shown: transforms.opaque,
  leaving: [transitions.leaving, transforms.transparent].join(' '),
  hidden: transforms.transparent,
};

export default class NavMenuComponent extends Component {
  @tracked isMenuOpen = false;
  @tracked isMenuTransitioning = false;

  get transitionClasses() {
    if (this.isMenuOpen) {
      if (this.isMenuTransitioning) {
        return displayStates.entering;
      }
      return displayStates.shown;
    } else if (this.isMenuTransitioning) {
      return displayStates.leaving;
    }
    return displayStates.hidden;
  }

  @action
  onTransitionEnd(e) {
    if (e.propertyName === 'opacity') {
      this.isMenuTransitioning = false;
    }
  }

  openMenu() {
    this.isMenuOpen = true;
    this.isMenuTransitioning = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.isMenuTransitioning = true;
  }

  @action
  onMenuClick() {
    if (this.isMenuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  @action
  onMenuItemClick() {
    this.closeMenu();
  }
}
