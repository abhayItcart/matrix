import { Inject, Injectable } from '@nestjs/common';
import { FaceVerificationResult } from '../../domain/entities/face-verification-result.entity';
import {
  IdentityRepository,
  IDENTITY_REPOSITORY,
} from '../../domain/repositories/identity.repository.interface';
import {
  FaceAIRepository,
  FACE_AI_REPOSITORY,
} from '../../domain/repositories/face-ai.repository.interface';

export interface VerifyFaceRequest {
  userId: string;
  selfieUrl: string;
}

@Injectable()
export class VerifyFaceUseCase {
  private readonly CONFIDENCE_THRESHOLD = 0.7;

  constructor(
    @Inject(IDENTITY_REPOSITORY)
    private readonly identityRepository: IdentityRepository,
    @Inject(FACE_AI_REPOSITORY)
    private readonly faceAIRepository: FaceAIRepository,
  ) {}

  async execute(request: VerifyFaceRequest): Promise<FaceVerificationResult> {
    const { userId, selfieUrl } = request;

    const profileImageUrl =
      await this.identityRepository.getProfileImage(userId);

    const confidence = await this.faceAIRepository.compareFaces(
      profileImageUrl,
      selfieUrl,
    );

    return FaceVerificationResult.create(confidence, this.CONFIDENCE_THRESHOLD);
  }
}
