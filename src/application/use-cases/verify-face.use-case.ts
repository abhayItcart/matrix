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
  selfieImageUrl: string;
  attendanceId: string;
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
    const { userId, selfieImageUrl, attendanceId } = request;
    const profileImageUrl = await this.identityRepository.getProfileImage(userId);

    if(!profileImageUrl){
      return FaceVerificationResult.create(0, 0, 'REJECTED', "No Profile Picture Found", false);
    }

    const { matchScore, confidence, decision, isIdentical } = await this.faceAIRepository.compareFaces(
      {
        employeeId: userId,
        profileImageUrl,
        selfieImageUrl,
        attendanceId,
      }
    );
    const result = FaceVerificationResult.create(matchScore, this.CONFIDENCE_THRESHOLD, decision, confidence, isIdentical);
    return result;
  }
}
