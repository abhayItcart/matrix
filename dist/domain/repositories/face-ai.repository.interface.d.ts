export interface FaceAIRepository {
    compareFaces(profileImageUrl: string, selfieImageUrl: string, employeeId: string, attendanceId: string): Promise<number>;
}
export declare const FACE_AI_REPOSITORY: unique symbol;
