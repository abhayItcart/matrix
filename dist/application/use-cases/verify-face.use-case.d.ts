import { FaceVerificationResult } from '../../domain/entities/face-verification-result.entity';
import { IdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { FaceAIRepository } from '../../domain/repositories/face-ai.repository.interface';
export interface VerifyFaceRequest {
    userId: string;
    selfieImageUrl: string;
    employeeId: string;
    attendanceId: string;
}
export declare class VerifyFaceUseCase {
    private readonly identityRepository;
    private readonly faceAIRepository;
    private readonly CONFIDENCE_THRESHOLD;
    constructor(identityRepository: IdentityRepository, faceAIRepository: FaceAIRepository);
    execute(request: VerifyFaceRequest): Promise<FaceVerificationResult>;
}
