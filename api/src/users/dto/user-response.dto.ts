import { User } from '../entities/user.entity';

export class UserResponseDto {
  constructor(user: User) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.avatar = user.avatar;
  }
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
