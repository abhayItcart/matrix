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
exports.FaceAIServiceAdapter = void 0;
const common_1 = require("@nestjs/common");
const face_ai_service_client_1 = require("../clients/face-ai-service.client");
let FaceAIServiceAdapter = class FaceAIServiceAdapter {
    constructor(faceAIServiceClient) {
        this.faceAIServiceClient = faceAIServiceClient;
    }
    async compareFaces(profileImageUrl, selfieImageUrl, employeeId, attendanceId) {
        const result = await this.faceAIServiceClient.compareFaces(profileImageUrl, selfieImageUrl, employeeId, attendanceId);
        return result.confidence;
    }
};
exports.FaceAIServiceAdapter = FaceAIServiceAdapter;
exports.FaceAIServiceAdapter = FaceAIServiceAdapter = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [face_ai_service_client_1.FaceAIServiceClient])
], FaceAIServiceAdapter);
//# sourceMappingURL=face-ai-service.adapter.js.map