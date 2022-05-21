import {KeycloakService} from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8090/auth',
        realm: 'BMJ',
        clientId: 'BMJclient'
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25
      }
    });
}
