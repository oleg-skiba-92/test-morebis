export const formInputComponent: ng.IComponentOptions = {
  bindings: {
    form: '=',
    model: '=',
    name: '<',
    maxLength: '<',
    required: '<',
    label: '<',
    type: '<'
  },
  template: require('./form-input.html'),
  // controller: EmployeeRowController
};