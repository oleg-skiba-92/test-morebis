import { FormSelectController } from "./form-select.controller";

export const formSelectComponent: ng.IComponentOptions = {
  bindings: {
    form: '=',
    model: '=',
    name: '<',
    required: '<',
    label: '<',
    options: '<'
  },
  template: require('./form-select.html'),
  controller: FormSelectController
};