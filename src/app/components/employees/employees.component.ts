import { EmployeesController } from "./employees.controller";
import './employees.scss'

export const employeesComponent: ng.IComponentOptions = {
  template: require('./employees.html'),
  controller: EmployeesController
};