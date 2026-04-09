import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class IdentityServiceClient {
  private readonly baseUrl: string;
  private readonly httpClient: AxiosInstance;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>('identityServiceUrl') || 'http://localhost:3000';
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async getUser(userId: string): Promise<any> {
    // const response = await this.httpService.get(`${this.baseUrl}/public/user-profile?id=${userId}`)
    
    // return response;

    try {
      const response = await this.httpClient.get(`/public/user-profile?id=${userId}`)
      return response.data;
    } catch (error) {
      console.log(error)
      return error;
    }
  }
}

