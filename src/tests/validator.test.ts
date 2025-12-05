import { NursingValidator } from '../validators/nursingValidator';
import { ValidationService } from '../services/validationService';

describe('NursingValidator', () => {
    let nursingValidator: NursingValidator;
    let validationService: ValidationService;

    beforeEach(() => {
        validationService = new ValidationService();
        nursingValidator = new NursingValidator(validationService);
    });

    test('should validate nursing data correctly', () => {
        const validData = { /* valid nursing data */ };
        const result = nursingValidator.validate(validData);
        expect(result).toBe(true);
    });

    test('should invalidate incorrect nursing data', () => {
        const invalidData = { /* invalid nursing data */ };
        const result = nursingValidator.validate(invalidData);
        expect(result).toBe(false);
    });

    // Additional tests can be added here
});