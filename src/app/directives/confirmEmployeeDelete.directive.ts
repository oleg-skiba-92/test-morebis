export class ConfirmEmployeeDeleteDirective implements ng.IDirective {
  restrict: string;

  static Factory() {
    let directive = ($mdDialog: ng.material.IDialogService, $parse: ng.IParseService) => {
      return new ConfirmEmployeeDeleteDirective($mdDialog, $parse);
    };

    directive.$inject = ['$mdDialog', '$parse'];

    return directive;
  }

  constructor(private $mdDialog: ng.material.IDialogService,
              private $parse: ng.IParseService) {
    this.restrict = 'A';
  }

  link($scope: ng.IScope,
       $element: ng.IAugmentedJQuery,
       $attr: ng.IAttributes) {

    let confirm = this.$mdDialog.confirm()
      .title('Are you sure?')
      .textContent('You really wanna delete this perfect record???')
      .ok('Ok')
      .cancel('Cancel');

    $element.unbind("click");
    $element.bind("click", (e) => {
      this.$mdDialog
        .show(confirm)
        .then(() => this.$parse($attr.ngClick)($scope), () => {});
    })
  }
}