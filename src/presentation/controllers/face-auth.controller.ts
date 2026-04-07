import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { VerifyFaceUseCase } from '../../application/use-cases/verify-face.use-case';
import { VerifyFaceRequestDto } from '../dtos/verify-face-request.dto';
import { VerifyFaceResponseDto } from '../dtos/verify-face-response.dto';

@Controller('face-auth')
export class FaceAuthController {
  constructor(private readonly verifyFaceUseCase: VerifyFaceUseCase) {}

  @Post('face-verify')
  @UsePipes(new ValidationPipe({ transform: true }))
  async verify(
    @Body() request: VerifyFaceRequestDto,
  ): Promise<VerifyFaceResponseDto> {
    const result = await this.verifyFaceUseCase.execute({
      userId: request.userId,
      selfieImageUrl: request.selfieImageUrl,
      employeeId: request.employeeId,
      attendanceId: request.attendanceId
    });

    return new VerifyFaceResponseDto(
      result.isMatch,
      result.confidence,
      result.threshold,
    );
  }
}
