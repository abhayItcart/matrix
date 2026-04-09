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
    this.baseUrl = this.configService.get<string>('faceAiServiceUrl') || 'http://localhost:7000';
  }

  async compareFaces(
    profileImageUrl: string,
    selfieImageUrl: string,
    attendanceId: string,
  ): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/verify`, {
        profileImageUrl,
        selfieImageUrl,
        attendanceId,
      }),
    );
    return response.data;
  }
}
