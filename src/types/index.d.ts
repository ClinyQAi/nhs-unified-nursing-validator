export interface NursingData {
    patientId: string;
    nurseId: string;
    timestamp: Date;
    observations: string[];
    notes?: string;
}

export interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

export interface Validator {
    validate(data: NursingData): ValidationResult;
}