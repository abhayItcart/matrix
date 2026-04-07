"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT || '3000', 10),
    identityServiceUrl: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3001',
    faceAiServiceUrl: process.env.FACE_AI_SERVICE_URL || 'http://localhost:7000',
});
//# sourceMappingURL=configuration.js.map