export class VerifyFaceResponseDto {
  isMatch: boolean;
  confidence: number;
  threshold: number;

  constructor(isMatch: boolean, confidence: number, threshold: number) {
    this.isMatch = isMatch;
    this.confidence = confidence;
    this.threshold = threshold;
  }
}
