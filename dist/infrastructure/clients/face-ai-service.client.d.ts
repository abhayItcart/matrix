import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class FaceAIServiceClient {
    private readonly httpService;
    private readonly configService;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    compareFaces(profileImageUrl: string, selfieImageUrl: string, employeeId: string, attendanceId: string): Promise<any>;
}
