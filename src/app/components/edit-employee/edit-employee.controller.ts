import { CreateEmployeeController } from "../create-employee/create-employee.controller";
import { EmployeeService } from "../../services/employee.service";
import { StateService } from "@uirouter/angularjs";
import { IresponseError } from "../../interfaces/IresponseError";
import { UtilsService } from "../../services/utils.service";

export class EditEmployeeController extends CreateEmployeeController implements ng.IComponentController {

  static $inject: string[] = ['$scope', '$state', 'utilsService', 'employeeService'];

  constructor(protected $scope: ng.IScope,
              protected $state: StateService,
              protected utilsService: UtilsService,
              protected employeeService: EmployeeService) {
    super($state, utilsService, employeeService);
  }

  submitForm() {
    this.utilsService.startLoader();
    this.employeeService
      .editEmployee(this.formModel)
      .then(() => {
        this.utilsService.stopLoader();
        this.$state.go('employees')
      });
  }

  protected initForm() {
    this.utilsService.startLoader();
    this.employeeService.getEmployeeById(+this.$state.params.employeeId)
      .then((res) => {
        this.utilsService.changeTitle(`Edit ${res.fullName}`);
        this.formModel = {...res};
        this.$scope.$apply();
        this.utilsService.stopLoader();
      })
      .catch((error: IresponseError) => {
        this.utilsService.stopLoader();
        this.$state.go('notFound');
      })
  }
}