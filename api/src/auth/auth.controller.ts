import { Body, Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtAuthGuard } from 'src/common/jwt-auth.guard';
import { Response } from 'express';
import { CurrentUser } from 'src/common/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto, @Res() res: Response) {
    const { session, message } = await this.authService.login(dto);
    return this.setCookie(res, session).json({ message });
  }

  @Post('register')
  async register(@Body() dto: RegisterDto, @Res() res: Response) {
    const { session, message } = await this.authService.register(dto);
    return this.setCookie(res, session).json({ message });
  }

  @Get('logout')
  logout(@Res() res: Response) {
    return res.clearCookie('session').json('ok');
  }

  @UseGuards(JwtAuthGuard)
  @Get('refresh')
  async refresh(@CurrentUser('id') id: string, @Res() res: Response) {
    const session = await this.authService.refresh(id);
    return this.setCookie(res, session).json('ok');
  }

  private setCookie(res: Response, session: string) {
    return res.cookie('session', session, {
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      sameSite: 'lax',
      path: '/',
    });
  }
}
