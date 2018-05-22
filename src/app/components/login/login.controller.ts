import { StateService } from "@uirouter/angularjs";

import { AuthService } from "../../services/auth.service";
import { UtilsService } from "../../services/utils.service";

import { ILoginData } from "../../interfaces/ILoginData";
import { IresponseError } from "../../interfaces/IresponseError";

export class LoginController implements ng.IComponentController {

  formModel: ILoginData;
  error: string;

  static $inject: string[] = ['$scope', '$state', 'utilsService', 'authService'];

  constructor(private $scope: ng.IScope,
              private $state: StateService,
              private utilsService: UtilsService,
              private authService: AuthService) {
    this.utilsService.changeTitle('Welcome!');
  }

  $onInit() {
    this.initForm();
  }

  submitForm() {
    this.utilsService.startLoader();
    this.error = null
    this.authService
      .login(this.formModel)
      .then(() => {
        this.utilsService.startLoader();
        this.$state.go('employees')
      })
      .catch((error: IresponseError) => {
        this.error = error.message;
        this.utilsService.startLoader();
        this.$scope.$apply();
      })
  }

  private initForm() {
    this.formModel = {
      username: null,
      password: null
    }
  }
}