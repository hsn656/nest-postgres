import { ApiBodyOptions } from '@nestjs/swagger';

export const LoginBodySwagger: ApiBodyOptions = {
  schema: {
    type: 'object',
    properties: {
      username: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
    },
  },
};
