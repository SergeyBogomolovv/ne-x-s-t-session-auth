import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtUserPayload } from 'src/common/jwt-payload';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { hash, compare } from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.usersService.findOneByEmail(dto.email);
    const isPasswordMatch = await compare(dto.password, user.password);

    if (!isPasswordMatch) {
      throw new BadRequestException('Invalid credentials');
    }

    return {
      session: this.generateSession(user),
      message: 'Successfully logged in',
    };
  }

  async register(dto: RegisterDto) {
    const hashedPassword = await hash(dto.password, 10);

    const user = await this.usersService.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    });

    return {
      session: this.generateSession(user),
      message: 'Successfully registered',
    };
  }

  async refresh(id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new UnauthorizedException('Session expired');
    }
    return this.generateSession(user);
  }

  private generateSession(user: User) {
    const payload = new JwtUserPayload(user);
    return this.jwtService.sign({ ...payload });
  }
}
