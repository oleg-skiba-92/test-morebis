export class FormInputController implements ng.IComponentController {
  form: ng.IFormController;
  model: string;
  name: string;
  required: boolean;
  maxLength: number;
  label: string;
  type: string;

  $onInit() {
    this.required = this.required || false;
    this.type = this.type || 'text';
  }
}