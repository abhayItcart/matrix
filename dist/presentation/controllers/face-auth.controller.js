"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceAuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const verify_face_use_case_1 = require("../../application/use-cases/verify-face.use-case");
const verify_face_request_dto_1 = require("../dtos/verify-face-request.dto");
const verify_face_response_dto_1 = require("../dtos/verify-face-response.dto");
let FaceAuthController = class FaceAuthController {
    constructor(verifyFaceUseCase) {
        this.verifyFaceUseCase = verifyFaceUseCase;
    }
    async verify(request) {
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
};
exports.FaceAuthController = FaceAuthController;
__decorate([
    (0, common_1.Post)('face-verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Verify face authentication',
        description: 'Compares a selfie image with a profile image to verify user identity using AI face recognition'
    }),
    (0, swagger_1.ApiBody)({ type: verify_face_request_dto_1.VerifyFaceRequestDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Face verification completed successfully',
        type: verify_face_response_dto_1.VerifyFaceResponseDto
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid request data'
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error'
    }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_face_request_dto_1.VerifyFaceRequestDto]),
    __metadata("design:returntype", Promise)
], FaceAuthController.prototype, "verify", null);
exports.FaceAuthController = FaceAuthController = __decorate([
    (0, swagger_1.ApiTags)('Face Authentication'),
    (0, common_1.Controller)('face-auth'),
    __metadata("design:paramtypes", [verify_face_use_case_1.VerifyFaceUseCase])
], FaceAuthController);
//# sourceMappingURL=face-auth.controller.js.map