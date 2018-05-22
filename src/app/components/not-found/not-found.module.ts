import { module } from "angular";
import { notFoundComponent } from "./not-found.component";

export const notFoundModule = module('notFound', [])
  .component('notFound', notFoundComponent);