import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class VerifyFaceRequestDto {
  @ApiProperty({
    description: 'Unique identifier of the user',
    example: 'usr_123456789'
  })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({
    description: 'URL of the selfie image to verify',
    example: 'https://example.com/images/selfie.jpg'
  })
  @IsUrl()
  @IsNotEmpty()
  selfieImageUrl: string;

  @ApiProperty({
    description: 'Unique identifier of the attendance record',
    example: 'att_456789123'
  })
  @IsString()
  @IsNotEmpty()
  attendanceId: string;
}
