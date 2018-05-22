import { module } from "angular";
import { formInputComponent } from "./form-input/form-input.component";
import { formSelectComponent } from "./form-select/form-select.component";
import { formTextareaComponent } from "./form-textarea/form-textarea.component";
import { paginateComponent } from "./paginate/paginate.component";

export const commonModule = module('common', [])
  .component('formInput', formInputComponent)
  .component('formSelect', formSelectComponent)
  .component('formTextarea', formTextareaComponent)
  .component('paginate', paginateComponent);