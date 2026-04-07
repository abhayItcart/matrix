"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceAuthModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const face_auth_controller_1 = require("./presentation/controllers/face-auth.controller");
const verify_face_use_case_1 = require("./application/use-cases/verify-face.use-case");
const identity_service_adapter_1 = require("./infrastructure/adapters/identity-service.adapter");
const face_ai_service_adapter_1 = require("./infrastructure/adapters/face-ai-service.adapter");
const identity_service_client_1 = require("./infrastructure/clients/identity-service.client");
const face_ai_service_client_1 = require("./infrastructure/clients/face-ai-service.client");
const identity_repository_interface_1 = require("./domain/repositories/identity.repository.interface");
const face_ai_repository_interface_1 = require("./domain/repositories/face-ai.repository.interface");
let FaceAuthModule = class FaceAuthModule {
};
exports.FaceAuthModule = FaceAuthModule;
exports.FaceAuthModule = FaceAuthModule = __decorate([
    (0, common_1.Module)({
        imports: [axios_1.HttpModule],
        controllers: [face_auth_controller_1.FaceAuthController],
        providers: [
            verify_face_use_case_1.VerifyFaceUseCase,
            identity_service_client_1.IdentityServiceClient,
            face_ai_service_client_1.FaceAIServiceClient,
            {
                provide: identity_repository_interface_1.IDENTITY_REPOSITORY,
                useClass: identity_service_adapter_1.IdentityServiceAdapter,
            },
            {
                provide: face_ai_repository_interface_1.FACE_AI_REPOSITORY,
                useClass: face_ai_service_adapter_1.FaceAIServiceAdapter,
            },
        ],
    })
], FaceAuthModule);
//# sourceMappingURL=face-auth.module.js.map