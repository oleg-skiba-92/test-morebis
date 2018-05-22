import { module } from "angular";
import { editEmployeeComponent } from "./edit-employee.component";

export const editEmployeeModule = module('editEmployee', [])
  .component('editEmployee', editEmployeeComponent);