import { FormTextareaController } from "./form-textarea.controller";

export const formTextareaComponent: ng.IComponentOptions = {
  bindings: {
    form: '=',
    model: '=',
    name: '<',
    required: '<',
    maxLength: '<',
    label: '<',
  },
  template: require('./form-textarea.html'),
  controller: FormTextareaController
};