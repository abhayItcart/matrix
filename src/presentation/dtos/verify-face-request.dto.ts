import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

export class VerifyFaceRequestDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsUrl()
  @IsNotEmpty()
  selfieUrl: string;
}
