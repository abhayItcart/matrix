export class FaceVerificationResult {
  constructor(
    public readonly isMatch: boolean,
    public readonly confidence: number,
    public readonly threshold: number,
  ) {}

  static create(confidence: number, threshold: number): FaceVerificationResult {
    const isMatch = confidence >= threshold;
    return new FaceVerificationResult(isMatch, confidence, threshold);
  }
}
