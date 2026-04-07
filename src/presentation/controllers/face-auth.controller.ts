import { Body, Controller, Post, UsePipes, ValidationPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { VerifyFaceUseCase } from '../../application/use-cases/verify-face.use-case';
import { VerifyFaceRequestDto } from '../dtos/verify-face-request.dto';
import { VerifyFaceResponseDto } from '../dtos/verify-face-response.dto';

@ApiTags('Face Authentication')
@Controller('face-auth')
export class FaceAuthController {
  constructor(private readonly verifyFaceUseCase: VerifyFaceUseCase) {}

  @Post('face-verify')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Verify face authentication',
    description: 'Compares a selfie image with a profile image to verify user identity using AI face recognition'
  })
  @ApiBody({ type: VerifyFaceRequestDto })
  @ApiResponse({
    status: 200,
    description: 'Face verification completed successfully',
    type: VerifyFaceResponseDto
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data'
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error'
  })
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

    return {
      isMatch: result.isMatch,
      confidence: result.confidence,
      threshold: result.threshold,
      decision: result.decision,
      matchScore: result.matchScore,
    };
  }
}
