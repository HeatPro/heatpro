import { KeycloakConnectOptions } from 'nest-keycloak-connect';

export const keycloakConfig: KeycloakConnectOptions = {
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  secret: process.env.KEYCLOAK_SECRET,
  bearerOnly: true,
  useNestLogger: true
};