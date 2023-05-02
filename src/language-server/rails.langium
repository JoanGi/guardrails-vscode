grammar Rails

entry Model:
    '<' 'rails' 'version='version=Version '>'
    rails = Rails
    '</' 'rails' '>';

Rails:
    (output=Output) 
    (prompt=Prompt)
    (script=Script);

Output:
    name='<output>' 
    (element+=(NonScalarType))*
    '</output>';

NonScalarType:
    ObjectType | ListType;

ObjectType:
    '<object' 'name='name=ID 
        'format=' format=Formats '>'
        (elements+=ScalarType)*
    '</object>';

ListType:
    '<list' 'name='name=ID 
        'format=' format=Formats '>'
        (elements+=ScalarType)*
    '</list>';

Format:
    name=QualityCriteria;
Formats:
    format+=Format ((';' format+=Format)*)?;

ScalarType:
    (element+=(StringType | IntegerType))*;

StringType:
    '<string' 'name='name=ID
    'description=' desc=STRING
    'format=' format=Formats
    (('on-fail-'fail=OnFail'=' corrective=CorrectiveAction)*)?
    '>';
OnFail:
    fail=QualityCriteria;

IntegerType:
    '<integer' 'name=' name=ID
    'description=' desc=STRING
    'format=' format=Formats
    (('on-fail-'fail=OnFail'=' corrective=Corrective)*)?
    '>';
Corrective:
    name=CorrectiveAction;

// Prompt 
Prompt:
    name= '<prompt>'
    prompt=STRING
    '</prompt>';

Script:
    name='<script' 'language='language=Languages '>'
    script=STRING
    '</script>';


QualityCriteria returns string: "bug-free-python"| "bug-free-sql" | "choice"| "ends-with" |"exclude-sql-predicates"|"is-high-quality-translation"|"alt-profinity-check"|"lowe-case"|"one-line"|"similar-to-document"|"sql-column-presence"|"two-words" | "upper-case" | "valid-choices"| "lenght" | "valid-range" | "valid-url";


Version returns string: '1.0' | '1.1';
Languages returns string: 'python' |'typescript'| 'c++' | 'go' | 'others' ;
CorrectiveAction returns string: 'reask' | 'fix' | 'filter' | 'refrain' | 'noop' | 'exception' | 'fix_reask';

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;
