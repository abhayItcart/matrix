import { FaceAIRepository } from '../../domain/repositories/face-ai.repository.interface';
import { FaceAIServiceClient } from '../clients/face-ai-service.client';
export declare class FaceAIServiceAdapter implements FaceAIRepository {
    private readonly faceAIServiceClient;
    constructor(faceAIServiceClient: FaceAIServiceClient);
    compareFaces(profileImageUrl: string, selfieImageUrl: string, employeeId: string, attendanceId: string): Promise<number>;
}
