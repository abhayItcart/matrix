import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class IdentityServiceClient {
  private readonly baseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('identityServiceUrl') || 'http://localhost:3001';
  }

  async getUser(userId: string): Promise<any> {
    const response = await firstValueFrom(
      this.httpService.get(`${this.baseUrl}/public/user-profile?id=${userId}`),
    );
    return response.data;
  }
}

