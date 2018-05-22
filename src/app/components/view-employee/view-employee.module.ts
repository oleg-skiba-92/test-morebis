import { module } from "angular";
import { viewEmployeeComponent } from "./view-employee.component";

export const viewEmployeeModule = module('viewEmployee', [])
  .component('viewEmployee', viewEmployeeComponent);