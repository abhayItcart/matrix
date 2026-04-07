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
exports.VerifyFaceUseCase = void 0;
const common_1 = require("@nestjs/common");
const face_verification_result_entity_1 = require("../../domain/entities/face-verification-result.entity");
const identity_repository_interface_1 = require("../../domain/repositories/identity.repository.interface");
const face_ai_repository_interface_1 = require("../../domain/repositories/face-ai.repository.interface");
let VerifyFaceUseCase = class VerifyFaceUseCase {
    constructor(identityRepository, faceAIRepository) {
        this.identityRepository = identityRepository;
        this.faceAIRepository = faceAIRepository;
        this.CONFIDENCE_THRESHOLD = 0.7;
    }
    async execute(request) {
        const { userId, selfieImageUrl, employeeId, attendanceId } = request;
        const { profileUrl: profileImageUrl } = await this.identityRepository.getProfileImage(userId);
        const confidence = await this.faceAIRepository.compareFaces(profileImageUrl, selfieImageUrl, employeeId, attendanceId);
        return face_verification_result_entity_1.FaceVerificationResult.create(confidence, this.CONFIDENCE_THRESHOLD);
    }
};
exports.VerifyFaceUseCase = VerifyFaceUseCase;
exports.VerifyFaceUseCase = VerifyFaceUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(identity_repository_interface_1.IDENTITY_REPOSITORY)),
    __param(1, (0, common_1.Inject)(face_ai_repository_interface_1.FACE_AI_REPOSITORY)),
    __metadata("design:paramtypes", [Object, Object])
], VerifyFaceUseCase);
//# sourceMappingURL=verify-face.use-case.js.map