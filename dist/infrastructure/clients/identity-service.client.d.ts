import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class IdentityServiceClient {
    private readonly httpService;
    private readonly configService;
    private readonly baseUrl;
    constructor(httpService: HttpService, configService: ConfigService);
    getUser(userId: string): Promise<{
        profileImageUrl: string;
    }>;
}
