export class FaceVerificationResult {
  constructor(
    public readonly isMatch: boolean,
    public readonly confidence: string,
    public readonly threshold: number,
    public readonly matchScore: number,
    public readonly decision: string
  ) {}

  static create(matchScore: number, threshold: number, decision: string, confidence: string): FaceVerificationResult {
    const isMatch = matchScore >= threshold && decision === 'accepted';
    return new FaceVerificationResult(isMatch, confidence, threshold, matchScore, decision);
  }
}

