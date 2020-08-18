import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import { action } from '@ember/object';

/*
    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
 */

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
  //shown: ['block', transforms.opaque].join(' '),
  shown: transforms.opaque,
  leaving: [transitions.leaving, transforms.transparent].join(' '),
  //hidden: ['hidden', transforms.transparent].join(' '),
  hidden: transforms.transparent,
};

export default class NavMenuComponent extends Component {
  @tracked isMenuOpen = false;
  @tracked isMenuTransitioning = false;

  get transitionClasses() {
    if (this.isMenuOpen) {
      if (this.isMenuTransitioning) {
        //console.log('entering');
        return displayStates.entering;
      }
      //console.log('shown');
      return displayStates.shown;
    } else if (this.isMenuTransitioning) {
      //console.log('leaving');
      return displayStates.leaving;
    }
    //console.log('hidden');
    return displayStates.hidden;
  }

  @action
  onTransitionEnd(e) {
    //console.log('onTransitionEnd');
    if (e.propertyName === 'opacity') {
      this.isMenuTransitioning = false;
    }
  }

  @action
  onMenuClick() {
    //console.log('click');
    this.isMenuOpen = !this.isMenuOpen;
    this.isMenuTransitioning = true;
  }
}
