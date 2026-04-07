import { ApiProperty } from '@nestjs/swagger';

export class VerifyFaceResponseDto {
  @ApiProperty({
    description: 'Whether the face verification was successful',
    example: true
  })
  isMatch: boolean;

  @ApiProperty({
    description: 'Confidence score of the face match (0-1)',
    example: 0.85,
    minimum: 0,
    maximum: 1
  })
  confidence: string;

  @ApiProperty({
    description: 'Threshold used for verification decision',
    example: 0.7,
    minimum: 0,
    maximum: 1
  })
  threshold: number;

  @ApiProperty({
    description: 'Decision made based on the verification',
    example: 'approved'
  })
  decision: string;

  @ApiProperty({
    description: 'Score representing the similarity between faces',
    example: 0.85
  })
  matchScore: number;

  constructor(isMatch: boolean, confidence: string, threshold: number, decision: string, matchScore: number) {
    this.isMatch = isMatch;
    this.confidence = confidence;
    this.threshold = threshold;
    this.decision = decision;
    this.matchScore = matchScore;
  }
}
