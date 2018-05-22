import { module } from "angular";

import { EmployeeService } from "./employee.service";
import { AuthService } from "./auth.service";
import { UtilsService } from "./utils.service";

export const servicesModule = module('services', [])
  .service('employeeService', EmployeeService)
  .service('authService', AuthService)
  .service('utilsService', UtilsService);