import { module } from 'angular';

import { employeesModule } from "./employees/employees.module";
import { viewEmployeeModule } from "./view-employee/view-employee.module";
import { createEmployeeModule } from "./create-employee/create-employee.module";
import { loginModule } from "./login/login.module";
import { editEmployeeModule } from "./edit-employee/edit-employee.module";
import { notFoundModule } from "./not-found/not-found.module";

export const componentsModule = module('components', [
  loginModule.name,
  employeesModule.name,
  viewEmployeeModule.name,
  createEmployeeModule.name,
  editEmployeeModule.name,
  notFoundModule.name,
]);