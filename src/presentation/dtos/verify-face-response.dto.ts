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
  confidence: number;

  @ApiProperty({
    description: 'Threshold used for verification decision',
    example: 0.7,
    minimum: 0,
    maximum: 1
  })
  threshold: number;

  constructor(isMatch: boolean, confidence: number, threshold: number) {
    this.isMatch = isMatch;
    this.confidence = confidence;
    this.threshold = threshold;
  }
}
