import {KeycloakService} from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService){
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8090',
        realm: 'BMJ',
        clientId: 'BMJclient'
      },
      initOptions: {
        onLoad: "login-required",
        flow: "standard"
      },
      loadUserProfileAtStartUp: true
    });
}
