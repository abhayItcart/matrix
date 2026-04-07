export declare class VerifyFaceResponseDto {
    isMatch: boolean;
    confidence: string;
    threshold: number;
    decision: string;
    matchScore: number;
    constructor(isMatch: boolean, confidence: string, threshold: number, decision: string, matchScore: number);
}
