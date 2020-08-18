import Application from 'ember-tailwindui-demo/app';
import config from 'ember-tailwindui-demo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
