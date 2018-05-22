import { CreateEmployeeController } from "./create-employee.controller";

export const createEmployeeComponent: ng.IComponentOptions = {
  template: require('./create-employee.html'),
  controller: CreateEmployeeController
};