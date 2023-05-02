import {
    createDefaultModule, createDefaultSharedModule, DefaultSharedModuleContext, inject,
    LangiumServices, LangiumSharedServices, Module, PartialLangiumServices
} from 'langium';
import { RailsGeneratedModule, RailsGeneratedSharedModule } from './generated/module';
import { RailsValidator, registerValidationChecks } from './rails-validator';

/**
 * Declaration of custom services - add your own service classes here.
 */
export type RailsAddedServices = {
    validation: {
        RailsValidator: RailsValidator
    }
}

/**
 * Union of Langium default services and your custom services - use this as constructor parameter
 * of custom service classes.
 */
export type RailsServices = LangiumServices & RailsAddedServices

/**
 * Dependency injection module that overrides Langium default services and contributes the
 * declared custom services. The Langium defaults can be partially specified to override only
 * selected services, while the custom services must be fully specified.
 */
export const RailsModule: Module<RailsServices, PartialLangiumServices & RailsAddedServices> = {
    validation: {
        RailsValidator: () => new RailsValidator()
    }
};

/**
 * Create the full set of services required by Langium.
 *
 * First inject the shared services by merging two modules:
 *  - Langium default shared services
 *  - Services generated by langium-cli
 *
 * Then inject the language-specific services by merging three modules:
 *  - Langium default language-specific services
 *  - Services generated by langium-cli
 *  - Services specified in this file
 *
 * @param context Optional module context with the LSP connection
 * @returns An object wrapping the shared services and the language-specific services
 */
export function createRailsServices(context: DefaultSharedModuleContext): {
    shared: LangiumSharedServices,
    Rails: RailsServices
} {
    const shared = inject(
        createDefaultSharedModule(context),
        RailsGeneratedSharedModule
    );
    const Rails = inject(
        createDefaultModule({ shared }),
        RailsGeneratedModule,
        RailsModule
    );
    shared.ServiceRegistry.register(Rails);
    registerValidationChecks(Rails);
    return { shared, Rails };
}
