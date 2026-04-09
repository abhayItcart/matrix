import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import axios, { AxiosInstance } from "axios";

@Injectable()
export class FaceAIServiceClient {
  private readonly baseUrl: string;
  private readonly httpClient: AxiosInstance;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.baseUrl = this.configService.get<string>("faceAiServiceUrl") || "http://localhost:7000";
    this.httpClient = axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  async compareFaces(employeeId: string, profileImageUrl: string, selfieImageUrl: string, attendanceId: string): Promise<any> {
    try {
      const response = await this.httpClient.post(`/verify`, {
        employeeId,
        profileImageUrl,
        selfieImageUrl,
        attendanceId,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
