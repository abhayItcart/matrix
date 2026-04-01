import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { FaceAuthController } from './presentation/controllers/face-auth.controller';
import { VerifyFaceUseCase } from './application/use-cases/verify-face.use-case';
import { IdentityServiceAdapter } from './infrastructure/adapters/identity-service.adapter';
import { FaceAIServiceAdapter } from './infrastructure/adapters/face-ai-service.adapter';
import { IdentityServiceClient } from './infrastructure/clients/identity-service.client';
import { FaceAIServiceClient } from './infrastructure/clients/face-ai-service.client';
import {
  IDENTITY_REPOSITORY,
} from './domain/repositories/identity.repository.interface';
import {
  FACE_AI_REPOSITORY,
} from './domain/repositories/face-ai.repository.interface';

@Module({
  imports: [HttpModule],
  controllers: [FaceAuthController],
  providers: [
    VerifyFaceUseCase,
    IdentityServiceClient,
    FaceAIServiceClient,
    {
      provide: IDENTITY_REPOSITORY,
      useClass: IdentityServiceAdapter,
    },
    {
      provide: FACE_AI_REPOSITORY,
      useClass: FaceAIServiceAdapter,
    },
  ],
})
export class FaceAuthModule {}
