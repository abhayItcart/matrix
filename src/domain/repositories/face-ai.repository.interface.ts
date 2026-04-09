export interface FaceAIRepository {
  compareFaces(
    profileImageUrl: string,
    selfieImageUrl: string,
    attendanceId: string,
  ): Promise<any>;
}

export const FACE_AI_REPOSITORY = Symbol('FaceAIRepository');
