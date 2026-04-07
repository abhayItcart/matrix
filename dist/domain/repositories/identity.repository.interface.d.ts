export interface IdentityRepository {
    getProfileImage(userId: string): Promise<string>;
}
export declare const IDENTITY_REPOSITORY: unique symbol;
