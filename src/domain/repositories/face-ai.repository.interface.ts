export interface FaceAIRepository {
  compareFaces(profileImageUrl: string, selfieUrl: string): Promise<number>;
}

export const FACE_AI_REPOSITORY = Symbol('FaceAIRepository');
