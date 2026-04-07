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
    employeeId: string,
    attendanceId: string
  ): Promise<{ confidence: number }> {
    const response = await firstValueFrom(
      this.httpService.post(`${this.baseUrl}/verify`, {
        employeeId,
        profileImageUrl,
        selfieImageUrl,
        attendanceId
      }),
    );
    return response.data;
  }
}
