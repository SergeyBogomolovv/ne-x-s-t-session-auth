import { User } from 'src/users/entities/user.entity';

export class JwtUserPayload {
  constructor(payload: User) {
    this.sub = payload.id;
  }
  sub: string;
}
