import config from '../../auth_config.json';

const { domain, clientId, audience, apiUri, errorPath } = config as {
  domain: string;
  clientId: string;
  audience?: string;
  apiUri: string;
  errorPath: string;
};

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    ...(audience && audience !== "https://angularoauth.us.auth0.com/api/v2/" ? { audience } : null),
    redirectUri: 'http://localhost:4200',
    errorPath,
  },
  httpInterceptor: {
    allowedList: [`${apiUri}/*`],
  },
};
