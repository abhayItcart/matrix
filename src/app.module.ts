import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FaceAuthModule } from './face-auth.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    FaceAuthModule,
  ],
})
export class AppModule {}
