import { module } from "angular";
import { ConfirmEmployeeDeleteDirective } from "./confirmEmployeeDelete.directive";

export const directivesModule = module('directives', [])
  .directive('confirmEmployeeDelete', ConfirmEmployeeDeleteDirective.Factory());