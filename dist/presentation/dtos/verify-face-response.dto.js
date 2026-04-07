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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyFaceResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class VerifyFaceResponseDto {
    constructor(isMatch, confidence, threshold, decision, matchScore) {
        this.isMatch = isMatch;
        this.confidence = confidence;
        this.threshold = threshold;
        this.decision = decision;
        this.matchScore = matchScore;
    }
}
exports.VerifyFaceResponseDto = VerifyFaceResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Whether the face verification was successful',
        example: true
    }),
    __metadata("design:type", Boolean)
], VerifyFaceResponseDto.prototype, "isMatch", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Confidence score of the face match (0-1)',
        example: 0.85,
        minimum: 0,
        maximum: 1
    }),
    __metadata("design:type", String)
], VerifyFaceResponseDto.prototype, "confidence", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Threshold used for verification decision',
        example: 0.7,
        minimum: 0,
        maximum: 1
    }),
    __metadata("design:type", Number)
], VerifyFaceResponseDto.prototype, "threshold", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Decision made based on the verification',
        example: 'approved'
    }),
    __metadata("design:type", String)
], VerifyFaceResponseDto.prototype, "decision", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Score representing the similarity between faces',
        example: 0.85
    }),
    __metadata("design:type", Number)
], VerifyFaceResponseDto.prototype, "matchScore", void 0);
//# sourceMappingURL=verify-face-response.dto.js.map