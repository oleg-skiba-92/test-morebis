export const employeeRowComponent: ng.IComponentOptions = {
  bindings: {
    employee: '=',
    onDelete: '&'
  },
  template: require('./employeeRow.html')
};