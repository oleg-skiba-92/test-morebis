import { StateService, TransitionService } from "@uirouter/angularjs";
import { AuthService } from "./services/auth.service";

/*@ngInject*/
export function appRun($transitions: TransitionService, $state: StateService, authService: AuthService) {
  $transitions
    .onStart(
      {to: (state) => !!state.data && !!state.data.permissions && state.data.permissions.authorised},
      (transition) => {
        if (!authService.isAuthorised()) {
          return $state.target(transition.to().data.permissions.redirectTo || 'login');
        }
      }
    );
}