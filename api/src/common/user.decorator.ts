import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtUserPayload } from './jwt-payload';

export const CurrentUser = createParamDecorator(
  (key: keyof JwtUserPayload | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    return key ? request.user?.[key] : request.user;
  },
);
