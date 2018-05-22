import { module } from "angular";
import { employeesComponent } from "./employees.component";
import { employeeRowComponent } from "./employeeRow/employeeRow.component";

export const employeesModule = module('employees', [])
  .component('employees', employeesComponent)
  .component('employeeRow', employeeRowComponent);