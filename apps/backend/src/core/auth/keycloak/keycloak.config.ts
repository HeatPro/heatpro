import { KeycloakConnectOptions, MultiTenantOptions } from 'nest-keycloak-connect';

const multiTenantOptions: MultiTenantOptions = {
  resolveAlways: false,
  realmResolver: (request) => process.env.KEYCLOAK_REALM
};

export const keycloakConfig: KeycloakConnectOptions = {
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  secret: process.env.KEYCLOAK_SECRET,
  multiTenant: multiTenantOptions
}