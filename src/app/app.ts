import { module } from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';

import 'angular-material/angular-material.css'

import { appConfig } from "./app.config";
import { router } from "./app.routing";
import { appRun } from "./app.run";

import { componentsModule } from "./components";
import { commonModule } from "./common";
import { servicesModule } from "./services";
import { directivesModule } from "./directives";

import './app.scss'

export let appModule = module('app', [
  'ui.router',
  'ngMaterial',
  'ngMessages',

  commonModule.name,
  componentsModule.name,
  servicesModule.name,
  directivesModule.name,
])
  .config(appConfig)
  .config(router)
  .run(appRun);
