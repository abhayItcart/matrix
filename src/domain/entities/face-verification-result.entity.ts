export class FaceVerificationResult {
  constructor(
    public readonly isMatch: boolean,
    public readonly confidence: string,
    public readonly threshold: number,
    public readonly matchScore: number,
    public readonly decision: string,
    public readonly isIdentical: boolean
  ) {}

  static create(matchScore: number, threshold: number, decision: string, confidence: string, isIdentical: boolean): FaceVerificationResult {
    const isMatch = matchScore >= threshold && isIdentical;
    return new FaceVerificationResult(isMatch, confidence, threshold, matchScore, decision, isIdentical);
  }
}

