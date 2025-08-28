import Keycloak from 'keycloak-js';

const keycloakConfig = {
  url: 'http://3.84.24.199:30081',
  realm: 'config-generator',
  clientId: 'angular-client'
};

export const keycloak = new Keycloak(keycloakConfig);
