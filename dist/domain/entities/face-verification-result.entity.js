"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaceVerificationResult = void 0;
class FaceVerificationResult {
    constructor(isMatch, confidence, threshold, matchScore, decision) {
        this.isMatch = isMatch;
        this.confidence = confidence;
        this.threshold = threshold;
        this.matchScore = matchScore;
        this.decision = decision;
    }
    static create(matchScore, threshold, decision, confidence) {
        const isMatch = matchScore >= threshold && decision === 'accepted';
        return new FaceVerificationResult(isMatch, confidence, threshold, matchScore, decision);
    }
}
exports.FaceVerificationResult = FaceVerificationResult;
//# sourceMappingURL=face-verification-result.entity.js.map