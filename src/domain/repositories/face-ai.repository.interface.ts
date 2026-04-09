export interface FaceAIRepository {
  compareFaces({
    employeeId,
    profileImageUrl,
    selfieImageUrl,
    attendanceId,
  }: {
    employeeId: string;
    profileImageUrl: string;
    selfieImageUrl: string;
    attendanceId: string;
  }): Promise<any>;
}

export const FACE_AI_REPOSITORY = Symbol('FaceAIRepository');
