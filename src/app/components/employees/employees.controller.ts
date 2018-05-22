import { EmployeeService } from "../../services/employee.service";
import { UtilsService } from "../../services/utils.service";

import { IEmployee } from "../../interfaces/IEmployee";
import { IDepartment } from "../../interfaces/IDepartment";

const DEFAULT_PAGE_SIZE = 5;
const FIRST_PAGE = 1;

export class EmployeesController implements ng.IComponentController {
  pageSize: number;
  currentPage: number;
  departmentFilter: string;
  searchFilter: string;

  employees: IEmployee[];
  departments: IDepartment[];

  static $inject: string[] = ["$scope", 'utilsService', "employeeService"];

  constructor(private $scope: ng.IScope,
              private utilsService: UtilsService,
              private employeeService: EmployeeService) {
    this.utilsService.changeTitle('Employees');
    this.pageSize = DEFAULT_PAGE_SIZE;
    this.currentPage = FIRST_PAGE;
    this.getEmployees();
    this.getDepartmets();
  }

  deleteEmployee(employeeId: number) {
    this.utilsService.startLoader();
    this.employeeService
      .deleteEmployee(employeeId)
      .then(() => {
        this.getEmployees();
      })
  }

  private getEmployees() {
    this.utilsService.startLoader();
    this.employeeService.getEmployees()
      .then(res => {
        this.employees = res;
        this.utilsService.stopLoader();
        this.$scope.$apply();
      })
  }

  private getDepartmets() {
    this.employeeService.getEmployeeDepartments()
      .then(res => {
        this.departments = res;
        this.$scope.$apply();
      })
  }
}