export class FormSelectController implements ng.IComponentController {
  form: ng.IFormController;
  model: string;
  name: string;
  required: boolean;
  label: string;
  options: object;


  $onInit() {
    this.required = this.required || false;
  }
}