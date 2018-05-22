import { StateService } from "@uirouter/angularjs";

import { EmployeeService } from "../../services/employee.service";
import { UtilsService } from "../../services/utils.service";

import { IDepartment } from "../../interfaces/IDepartment";
import { IEmployee } from "../../interfaces/IEmployee";

export class CreateEmployeeController implements ng.IComponentController {

  formModel: IEmployee;
  departments: IDepartment[];

  static $inject: string[] = ['$state', 'utilsService', 'employeeService'];

  constructor(protected $state: StateService,
              protected utilsService: UtilsService,
              protected employeeService: EmployeeService) {
    this.utilsService.changeTitle('Create Employee');
  }

  $onInit() {
    this.getDepartments();
    this.initForm();
  }

  submitForm() {
    this.utilsService.startLoader();
    this.employeeService
      .createEmployee(this.formModel)
      .then(() => {
        this.utilsService.stopLoader();
        this.$state.go('employees')
      });
  }

  protected initForm() {
    this.formModel = {
      id: null,
      fullName: null,
      department: null,
      notes: null,
    }
  }

  private getDepartments() {
    this.employeeService
      .getEmployeeDepartments()
      .then((res) => {
        this.departments = res;
      })
  }
}