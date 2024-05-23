import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthMiddleware } from './auth.middleware';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: 'this is a jwt secret',
      signOptions: { expiresIn: '1h' },
    }),
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('/api/user/profil');
  }
}
