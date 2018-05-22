import { LoginController } from "./login.controller";
import './login.scss';

export const loginComponent: ng.IComponentOptions = {
  template: require('./login.html'),
  controller: LoginController
};