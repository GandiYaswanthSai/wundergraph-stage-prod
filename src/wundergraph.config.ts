import {introspect, configureWunderGraphApplication, Api} from '@wundergraph/sdk';


const api = introspect.prisma({
    apiNamespace: "tenantName",
    prismaFilePath: "./prisma/schema.prisma",
    introspection: {
        disableCache: true,
    },
});

configureWunderGraphApplication({
    // compose the APIs into a unified WunderGraph API
    apis: [api],
    security: {
        enableGraphQLEndpoint: true,
      }
  });