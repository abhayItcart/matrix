"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    identityServiceUrl: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3000',
    faceAiServiceUrl: process.env.FACE_AI_SERVICE_URL || 'https://face-recognition.aixhub.ai',
});
//# sourceMappingURL=configuration.js.map