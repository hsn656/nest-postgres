import { ApiResponseSchemaHost } from '@nestjs/swagger';

export const GetProfileSchema: ApiResponseSchemaHost = {
  status: 200,
  description: 'get profile successfully',
  schema: {
    type: 'object',
    properties: {
      id: {
        type: 'number',
        example: 1,
      },
      first_name: {
        type: 'string',
        example: 'hassan',
      },
      middle_name: {
        type: 'string',
        example: 'mohamed',
      },
      last_name: {
        type: 'string',
        example: 'mohamed',
      },
      username: {
        type: 'string',
        example: 'hsn',
      },
      email: {
        type: 'string',
        example: 'hsn@gmail.com',
      },
      dob: {
        type: 'date',
        example: '2022-03-06',
      },
      state: {
        type: 'string',
        example: 'state',
      },
      city: {
        type: 'string',
        example: 'city',
      },
      phone: {
        type: 'string',
        example: '012412',
      },
      gender: {
        type: 'string',
        example: 'male',
      },
      avatar_url: {
        type: 'string',
        example: 'www.example.com',
      },
    },
  },
};
