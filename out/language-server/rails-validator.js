"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RailsValidator = exports.registerValidationChecks = void 0;
/**
 * Register custom validation checks.
 */
function registerValidationChecks(services) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RailsValidator;
    const checks = {};
    registry.register(checks, validator);
}
exports.registerValidationChecks = registerValidationChecks;
/**
 * Implementation of custom validations.
 */
class RailsValidator {
    checkPersonStartsWithCapital(person, accept) {
        //    if (person.name) {
        //        const firstChar = person.name.substring(0, 1);
        //        if (firstChar.toUpperCase() !== firstChar) {
        //            accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
        //        }
        //    }
    }
}
exports.RailsValidator = RailsValidator;
//# sourceMappingURL=rails-validator.js.map