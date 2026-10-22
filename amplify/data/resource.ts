import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  FestivalEvent: a
    .model({
      id: a.id().required(),
      artist: a.string().required(),
      space: a.string().required(),
      time: a.string().required(),
      status: a.enum(['CONFIRMED', 'DELAYED', 'CANCELLED']),
    })
    .identifier(['id'])
    // Demo pública para poder practicar el CRUD sin iniciar sesión.
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
