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
exports.VerifyFaceRequestDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class VerifyFaceRequestDto {
}
exports.VerifyFaceRequestDto = VerifyFaceRequestDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier of the user',
        example: 'usr_123456789'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyFaceRequestDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'URL of the selfie image to verify',
        example: 'https://example.com/images/selfie.jpg'
    }),
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyFaceRequestDto.prototype, "selfieImageUrl", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier of the employee',
        example: 'emp_987654321'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyFaceRequestDto.prototype, "employeeId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Unique identifier of the attendance record',
        example: 'att_456789123'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], VerifyFaceRequestDto.prototype, "attendanceId", void 0);
//# sourceMappingURL=verify-face-request.dto.js.map