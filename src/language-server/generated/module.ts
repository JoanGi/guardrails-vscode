/******************************************************************************
 * This file was generated by langium-cli 1.1.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

import { LangiumGeneratedServices, LangiumGeneratedSharedServices, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { RailsAstReflection } from './ast';
import { RailsGrammar } from './grammar';

export const RailsLanguageMetaData: LanguageMetaData = {
    languageId: 'rails',
    fileExtensions: ['.rails'],
    caseInsensitive: false
};

export const RailsGeneratedSharedModule: Module<LangiumSharedServices, LangiumGeneratedSharedServices> = {
    AstReflection: () => new RailsAstReflection()
};

export const RailsGeneratedModule: Module<LangiumServices, LangiumGeneratedServices> = {
    Grammar: () => RailsGrammar(),
    LanguageMetaData: () => RailsLanguageMetaData,
    parser: {}
};
