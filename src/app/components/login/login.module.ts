import { module } from "angular";
import { loginComponent } from "./login.component";

export const loginModule = module('login', [])
  .component('login', loginComponent);