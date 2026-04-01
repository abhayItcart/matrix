import { Injectable } from '@nestjs/common';
import { IdentityRepository } from '../../domain/repositories/identity.repository.interface';
import { IdentityServiceClient } from '../clients/identity-service.client';

@Injectable()
export class IdentityServiceAdapter implements IdentityRepository {
  constructor(private readonly identityServiceClient: IdentityServiceClient) {}

  async getProfileImage(userId: string): Promise<string> {
    const user = await this.identityServiceClient.getUser(userId);
    return user.profileImageUrl;
  }
}
