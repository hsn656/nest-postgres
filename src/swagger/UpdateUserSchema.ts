import { ApiResponseSchemaHost } from '@nestjs/swagger';

export const UpdateUserSchema: ApiResponseSchemaHost = {
  status: 200,
  description: 'update user response',
  schema: {
    type: 'object',
    properties: {
      message: { type: 'string', example: 'success' },
    },
  },
};
