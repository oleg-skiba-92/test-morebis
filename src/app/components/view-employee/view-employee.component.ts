import { ViewEmployeeController } from "./view-employee.controller";
import './view-employee.scss';

export const viewEmployeeComponent: ng.IComponentOptions = {
  template: require('./view-employee.html'),
  controller: ViewEmployeeController
};