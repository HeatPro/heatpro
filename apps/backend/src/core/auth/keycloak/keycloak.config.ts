
import { KeycloakConnectOptions, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

export const keycloakConfig: KeycloakConnectOptions = {
  authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL,
  realm: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT_ID,
  secret: process.env.KEYCLOAK_SECRET,
  bearerOnly: true,
  useNestLogger: true,
  // SSL configuration if needed
  'ssl-required': 'external',
  // Verify token audience if needed
  verifyTokenAudience: true
};