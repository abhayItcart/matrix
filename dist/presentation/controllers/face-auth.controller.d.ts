import { VerifyFaceUseCase } from '../../application/use-cases/verify-face.use-case';
import { VerifyFaceRequestDto } from '../dtos/verify-face-request.dto';
import { VerifyFaceResponseDto } from '../dtos/verify-face-response.dto';
export declare class FaceAuthController {
    private readonly verifyFaceUseCase;
    constructor(verifyFaceUseCase: VerifyFaceUseCase);
    verify(request: VerifyFaceRequestDto): Promise<VerifyFaceResponseDto>;
}
