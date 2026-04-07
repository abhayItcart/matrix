import { IdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { IdentityServiceClient } from '../clients/identity-service.client';
export declare class IdentityServiceAdapter implements IdentityRepository {
    private readonly identityServiceClient;
    constructor(identityServiceClient: IdentityServiceClient);
    getProfileImage(userId: string): Promise<string>;
}
