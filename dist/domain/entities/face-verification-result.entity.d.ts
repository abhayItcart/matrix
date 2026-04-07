export declare class FaceVerificationResult {
    readonly isMatch: boolean;
    readonly confidence: string;
    readonly threshold: number;
    readonly matchScore: number;
    readonly decision: string;
    constructor(isMatch: boolean, confidence: string, threshold: number, matchScore: number, decision: string);
    static create(matchScore: number, threshold: number, decision: string, confidence: string): FaceVerificationResult;
}
