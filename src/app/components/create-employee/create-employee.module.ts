import { module } from "angular";
import { createEmployeeComponent } from "./create-employee.component";

export const createEmployeeModule = module('createEmployee', [])
  .component('createEmployee', createEmployeeComponent);