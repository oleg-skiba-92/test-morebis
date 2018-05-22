export class FormTextareaController implements ng.IComponentController {
  form: ng.IFormController;
  model: string;
  name: string;
  required: boolean;
  maxLength: number;
  label: string;


  $onInit() {
    this.required = this.required || false;
  }
}