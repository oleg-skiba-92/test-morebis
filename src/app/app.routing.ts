import { StateProvider, UrlRouterProvider } from "@uirouter/angularjs";

/*@ngInject*/
export function router($stateProvider: StateProvider, $urlRouterProvider: UrlRouterProvider) {

  $urlRouterProvider.when('', '/employees');
  $urlRouterProvider.otherwise('notFound');

  $stateProvider

    .state('login', {
      url: '/login',
      template: '<login/>',
    })

    .state('notFound', {
      url: '/notFound',
      template: '<not-found/>',
    })

    .state('employees', {
      url: '/employees',
      template: '<employees/>',
      data: {
        permissions: {
          authorised: true,
          redirectTo: 'login'
        }
      }
    })

    .state('createEmployee', {
      url: '/create-employee',
      template: '<create-employee/>',
      data: {
        permissions: {
          authorised: true,
          redirectTo: 'login'
        }
      }
    })

    .state('editEmployee', {
      url: '/edit-employee/:employeeId',
      template: '<edit-employee/>',
      data: {
        permissions: {
          authorised: true,
          redirectTo: 'login'
        }
      }
    })

    .state('viewEmployee', {
      url: '/view-employee/:employeeId',
      template: '<view-employee/>',
      data: {
        permissions: {
          authorised: true,
          redirectTo: 'login'
        }
      }
    })

}