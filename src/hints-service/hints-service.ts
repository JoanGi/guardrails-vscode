/******************************************************************************
 * Copyright 2022 SOM Research
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/
 import { TextDocument, MarkdownString} from 'vscode';


 
 
 export interface Hints {
     // Load the Abstract Syntax Tree of the .descML active file
     populateHints(Declaration : string | TextDocument, position: any) : MarkdownString | undefined;
 }
 
 /**
  */
 export class HintsService implements Hints {
 
 
     constructor() {
       
    }
 
     populateHints(document : TextDocument, position: any) : MarkdownString | undefined {
        const wordRange = document.getWordRangeAtPosition(position);
        const word = document.getText(wordRange);
        switch (word) {
            case "output":
                const markdown = new MarkdownString();
                markdown.appendMarkdown(`## Output \n The output element contains the structure of the expected output of the LLM. It contains the spec for the overall structure of the LLM output, type info for each field, and the quality criteria for each field and the corrective action to be taken in case quality criteria is not met. \n`)
                markdown.appendCodeblock(`
<rail version="0.1">
    <output>
        <string name="text" description="The generated text" 
            format="two-words" on-fail-two-words="reask"/>
        <float name="score" description="The score of th.e.."
            format="min-val: 0" on-fail-min-val="fix"/>
        <object name="metadata" description="The metadata...">
            <string name="key_1" description="description of key_1" />
            ...
        </object>
    </output>
</rail>`,"rails")

                return  markdown
  //          case "prompt":
             //   return "## Prompt \n The prompt `declare = x` element contains the high level instructions that are sent to the LLM. Check out the RAIL Prompt page for more details.";
  //          case "rails":
  //              return `<rail version="0.1">
  //              <output>
  //                  <string name="text" description="The generated text" format="two-words" on-fail-two-words="reask"/>
  //                  <float name="score" description="The score of the generated text" format="min-val: 0" on-fail-min-val="fix"/>
  //                  <object name="metadata" description="The metadata associated with the generated text">
  //                      <string name="key_1" description="description of key_1" />
  //                      ...
   //                 </object>
   //             </output>
   //         </rail>`;
           default:
            return undefined
        }
     }
 }