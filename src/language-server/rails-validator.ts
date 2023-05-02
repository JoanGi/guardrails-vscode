import { ValidationAcceptor, ValidationChecks } from 'langium';
import { RailsAstType, Output } from './generated/ast';
import type { RailsServices } from './rails-module';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: RailsServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.RailsValidator;
    const checks: ValidationChecks<RailsAstType> = {
       
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class RailsValidator {

    checkPersonStartsWithCapital(person: Output, accept: ValidationAcceptor): void {
    //    if (person.name) {
    //        const firstChar = person.name.substring(0, 1);
    //        if (firstChar.toUpperCase() !== firstChar) {
    //            accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
    //        }
    //    }
    }

}
