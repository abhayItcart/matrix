export interface IdentityRepository {
    getProfileImage(userId: string): Promise<any>;
}
export declare const IDENTITY_REPOSITORY: unique symbol;
