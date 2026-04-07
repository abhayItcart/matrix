import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class VerifyFaceRequestDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsUrl()
  @IsNotEmpty()
  selfieImageUrl: string;

  @IsString()
  @IsNotEmpty()
  employeeId: string;

  @IsString()
  @IsNotEmpty()
  attendanceId: string;
}
