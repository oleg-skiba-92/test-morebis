import { PaginateController } from "./paginate.controller";

export const paginateComponent: ng.IComponentOptions = {
  bindings: {
    currentPage: '=',
    pageSize: '<',
    totalCount: '<'
  },
  template: require('./paginate.html'),
  controller: PaginateController
};