import { Injectable } from '@nestjs/common';
import { FaceAIRepository } from '../../domain/repositories/face-ai.repository.interface';
import { FaceAIServiceClient } from '../clients/face-ai-service.client';

@Injectable()
export class FaceAIServiceAdapter implements FaceAIRepository {
  constructor(private readonly faceAIServiceClient: FaceAIServiceClient) {}

  async compareFaces({
    employeeId,
    profileImageUrl,
    selfieImageUrl,
    attendanceId,
  }: {
    employeeId: string;
    profileImageUrl: string;
    selfieImageUrl: string;
    attendanceId: string;
  }): Promise<any> {
    const result = await this.faceAIServiceClient.compareFaces(
      employeeId,
      profileImageUrl,
      selfieImageUrl,
      attendanceId,
    );
    return result.data;
  }
}
