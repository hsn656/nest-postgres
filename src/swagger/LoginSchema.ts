import { ApiResponseSchemaHost } from '@nestjs/swagger';

export const LoginSchema: ApiResponseSchemaHost = {
  status: 200,
  description: 'success login',
  schema: {
    type: 'object',
    properties: {
      accessToken: {
        type: 'string',
        example:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXJuYW1lMSIsInN1YiI6MSwiaWF0IjoxNjc2MTQ3ODk2fQ.b_xScgyqwHl9ezjasQ6ITWWCEmktcgiNoJK1CtsDeKo',
      },
    },
  },
};
