export default () => ({
  port: parseInt(process.env.PORT || '3000', 10),
  identityServiceUrl: process.env.IDENTITY_SERVICE_URL || 'http://localhost:3001',
  faceAiServiceUrl: process.env.FACE_AI_SERVICE_URL || 'http://localhost:7000',
});
