export interface FaceAIRepository {
    compareFaces(profileImageUrl: string, selfieImageUrl: string, employeeId: string, attendanceId: string): Promise<any>;
}
export declare const FACE_AI_REPOSITORY: unique symbol;
