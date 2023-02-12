import { ApiResponseSchemaHost } from '@nestjs/swagger';

export const UnauthorizedErrorSchema: ApiResponseSchemaHost = {
  status: 401,
  description: 'Unauthorized Error',
  schema: {
    type: 'object',
    properties: {
      statusCode: { type: 'number', example: 401 },
      message: { type: 'string', example: 'Unauthorized' },
    },
  },
};
