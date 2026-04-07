export interface IdentityRepository {
  getProfileImage(userId: string): Promise<string>;
}

export const IDENTITY_REPOSITORY = Symbol('IdentityRepository');

