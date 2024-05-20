import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies['jwt_token'];
    if (!token) {
      throw new UnauthorizedException('Unauthorized - No token provided');
    }

    try {
      const decoded = await this.jwtService.verifyAsync(token);
      console.log(decoded);
      req['user'] = decoded;
      next();
    } catch (error) {
      throw new UnauthorizedException('Unauthorized - Invalid token');
    }
  }
}
