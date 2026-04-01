import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class FaceAIServiceClient {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('faceAiServiceUrl') || 'http://localhost:5000';
  }

  async compareFaces(
    profileImageUrl: string,
    selfieUrl: string,
  ): Promise<{ confidence: number }> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/compare`, {
        profileImageUrl,
        selfieUrl,
      }),
    );
    return response.data;
  }
}
