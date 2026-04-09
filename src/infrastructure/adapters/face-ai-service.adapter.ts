import { Injectable } from '@nestjs/common';
import { FaceAIRepository } from '../../domain/repositories/face-ai.repository.interface';
import { FaceAIServiceClient } from '../clients/face-ai-service.client';

@Injectable()
export class FaceAIServiceAdapter implements FaceAIRepository {
  constructor(private readonly faceAIServiceClient: FaceAIServiceClient) {}

  async compareFaces(
    profileImageUrl: string,
    selfieImageUrl: string,
    attendanceId: string,
  ): Promise<any> {
    const result = await this.faceAIServiceClient.compareFaces(
      profileImageUrl,
      selfieImageUrl,
      attendanceId,
    );
    return result.data;
  }
}
