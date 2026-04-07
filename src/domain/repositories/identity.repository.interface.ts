export interface IdentityRepository {
  getProfileImage(userId: string): Promise<any>;
}

export const IDENTITY_REPOSITORY = Symbol('IdentityRepository');

