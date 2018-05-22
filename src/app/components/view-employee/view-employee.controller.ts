import { StateParams, StateService } from "@uirouter/angularjs";

import { EmployeeService } from "../../services/employee.service";
import { UtilsService } from "../../services/utils.service";

import { IEmployee } from "../../interfaces/IEmployee";
import { IresponseError } from "../../interfaces/IresponseError";

export class ViewEmployeeController implements ng.IComponentController {

  employee: IEmployee;

  static $inject: string[] = ['$scope', '$state', '$stateParams', 'utilsService', 'employeeService'];

  constructor(private $scope: ng.IScope,
              private $state: StateService,
              private $stateParams: StateParams,
              private utilsService: UtilsService,
              private employeeService: EmployeeService) {
  }

  $onInit() {
    this.utilsService.startLoader();
    this.employeeService
      .getEmployeeById(+this.$stateParams.employeeId)
      .then((employee) => {
        this.utilsService.changeTitle(employee.fullName);
        this.employee = employee;
        this.$scope.$apply();
        this.utilsService.stopLoader();
      })
      .catch((error: IresponseError) => {
        this.$state.go('notFound');
        this.utilsService.stopLoader();
      })
  }
}