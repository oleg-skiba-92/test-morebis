/*@ngInject*/
export function appConfig($locationProvider: ng.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
}