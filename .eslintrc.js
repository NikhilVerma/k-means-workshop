module.exports = {
    root: true,

    plugins: ['prettier'],

    extends: [
        'eslint:recommended',
        // Disable formatting rules
        'prettier',
    ],

    env: {
        // All env ere set to false in order to allow only certain
        // globals through "globals" config.
        browser: true,
        node: false,
        amd: false,
        es6: true,
        commonjs: false,
    },

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
        },
    },

    rules: {
        // Prettier rules are disabled for now
        'prettier/prettier': 0,

        // Possible Errors
        // The following rules point out areas where you might have made mistakes.
        // enforce “for” loop update clause moving the counter in the right direction.
        'for-direction': 2,
        // enforce return statements in getters
        'getter-return': 2,
        // disallow await inside of loops
        'no-await-in-loop': 2,
        // disallow comparing against -0
        'no-compare-neg-zero': 2,
        // disallow assignment in conditional expressions
        'no-cond-assign': [2, 'always'],
        // disallow use of console
        'no-console': 1,
        // disallow use of constant expressions in conditions
        'no-constant-condition': 1,
        // disallow control characters in regular expressions
        'no-control-regex': 2,
        // disallow use of debugger
        'no-debugger': 2,
        // disallow duplicate arguments in functions
        'no-dupe-args': 2,
        // disallow duplicate keys when creating object literals
        'no-dupe-keys': 2,
        // disallow a duplicate case label.
        'no-duplicate-case': 2,
        // disallow empty block statements
        'no-empty': 2,
        // disallow the use of empty character classes in regular expressions
        'no-empty-character-class': 2,
        // disallow assigning to the exception in a catch block
        'no-ex-assign': 2,
        // disallow double-negation boolean casts in a boolean context
        'no-extra-boolean-cast': 0,
        // disallow overwriting functions written as function declarations
        'no-func-assign': 2,
        // disallow function or variable declarations in nested blocks
        'no-inner-declarations': 2,
        // disallow invalid regular expression strings in the RegExp constructor
        'no-invalid-regexp': 2,
        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 2,
        // disallow the use of object properties of the global object (Math and JSON) as functions
        'no-obj-calls': 2,
        // disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 2,
        // disallow sparse arrays
        'no-sparse-arrays': 2,
        // disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 2,
        // disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 2,
        // disallow control flow statements in finally blocks
        'no-unsafe-finally': 2,
        // disallow negating the left operand of relational operators
        'no-unsafe-negation': 2,
        // disallow comparisons with the value NaN
        'use-isnan': 2,
        // ensure results of typeof are compared against a valid string
        'valid-typeof': 2,

        // Best Practices
        // These are rules designed to prevent you from making mistakes. They
        // either prescribe a better way of doing something or help you avoid footguns.
        // enforce getter/setter pairs in objects
        'accessor-pairs': 0,
        // enforce return statements in callbacks of array’s methods
        'array-callback-return': 2,
        // treat var statements as if they were block scoped
        'block-scoped-var': 0,
        // enforce that class methods utilize this
        'class-methods-use-this': 2,
        // specify the maximum cyclomatic complexity allowed in a program
        complexity: [2, 20],
        // require return statements to either always or never specify values
        'consistent-return': 0,
        // require default case in switch statements
        'default-case': 2,
        // encourage use of dot notation whenever possible
        'dot-notation': [2, { allowKeywords: true }],
        // require use of === and !==
        eqeqeq: [2, 'always', { null: 'ignore' }], // TODO set null option to "never"
        // ensure for-in loops have an if statement
        'guard-for-in': 0,
        // disallow use of alert, confirm, and prompt
        'no-alert': 2,
        // disallow use of arguments.caller or arguments.callee
        'no-caller': 2,
        // disallow lexical declarations in case clauses
        'no-case-declarations': 2,
        // disallow division operators explicitly at beginning of regular expression
        'no-div-regex': 0,
        // disallow else after a return in an if
        'no-else-return': 0,
        // disallow use of empty functions
        'no-empty-function': [2, { allow: ['constructors', 'methods'] }],
        // disallow use of empty destructuring patterns
        'no-empty-pattern': 2,
        // disallow comparisons to null without a type-checking operator
        'no-eq-null': 2,
        // disallow use of eval()
        'no-eval': 2,
        // disallow adding to native types
        'no-extend-native': 2,
        // disallow unnecessary function binding
        'no-extra-bind': 2,
        // disallow unnecessary labels
        'no-extra-label': 2,
        // disallow fallthrough of case statements
        'no-fallthrough': 2,
        // disallow assignments to native objects or read-only global variables
        'no-global-assign': 2,
        // disallow the type conversions with shorter notations
        'no-implicit-coercion': 0,
        // disallow var and named functions in global scope
        'no-implicit-globals': 2,
        // disallow use of eval()-like methods
        'no-implied-eval': 2,
        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 2,
        // disallow usage of __iterator__ property
        'no-iterator': 2,
        // disallow use of labeled statements
        'no-labels': 2,
        // disallow unnecessary nested blocks
        'no-lone-blocks': 2,
        // disallow creation of functions within loops
        'no-loop-func': 2,
        // disallow the use of magic numbers
        'no-magic-numbers': 0, // TODO enable
        // disallow use of multiline strings
        'no-multi-str': 2,
        // disallow use of the new operator when not part of an assignment or comparison
        'no-new': 2,
        // disallow use of new operator for Function object
        'no-new-func': 2,
        // disallow creating new instances of String,Number, and Boolean
        'no-new-wrappers': 2,
        // disallow use of octal literals
        'no-octal': 2,
        // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        'no-octal-escape': 2,
        // disallow reassignment of function parameters
        'no-param-reassign': 2,
        // disallow usage of __proto__ property
        'no-proto': 2,
        // disallow declaring the same variable more than once
        'no-redeclare': 2,
        // disallow use of assignment in return statement
        'no-return-assign': 2,
        // disallow unnecessary return await
        'no-return-await': 2,
        // disallow use of javascript, // urls.
        'no-script-url': 2,
        // disallow assignments where both sides are exactly the same
        'no-self-assign': [2, { props: true }],
        // disallow comparisons where both sides are exactly the same
        'no-self-compare': 2,
        // disallow use of the comma operator
        'no-sequences': 2,
        // restrict what can be thrown as an exception
        'no-throw-literal': 2,
        // disallow unmodified conditions of loops
        'no-unmodified-loop-condition': 2,
        // disallow usage of expressions in statement position
        'no-unused-expressions': 2,
        // disallow unused labels
        'no-unused-labels': 2,
        // disallow unnecessary .call() and .apply()
        'no-useless-call': 2,
        // disallow unnecessary concatenation of literals or template literals
        'no-useless-concat': 2,
        // disallow unnecessary usage of escape character
        'no-useless-escape': 2,
        // disallow redundant return statements
        'no-useless-return': 0,
        // disallow use of the void operator
        'no-void': 2,
        // disallow usage of configurable warning terms in comments, // e.g. TODO or FIXME
        'no-warning-comments': [0, { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],
        // disallow use of the with statement
        'no-with': 2,
        // require using Error objects as Promise rejection reasons
        'prefer-promise-reject-errors': 2,
        // require use of the second argument for parseInt()
        radix: 2,
        // disallow async functions which have no await expression
        'require-await': 2,
        // require declaration of all vars at the top of their containing scope
        'vars-on-top': 0,
        // require or disallow Yoda conditions
        yoda: [2, 'never'],

        // Strict Mode
        // These rules relate to using strict mode and strict mode directives.
        // require effective use of strict mode directives
        strict: [2, 'global'],

        // Variables
        // These rules have to do with variable declarations.
        // enforce or disallow variable initializations at definition
        'init-declarations': 0,
        // disallow the catch clause parameter name being the same as a variable in the outer scope
        'no-catch-shadow': 0,
        // disallow deletion of variables
        'no-delete-var': 2,
        // disallow labels that share a name with a variable
        'no-label-var': 2,
        // restrict usage of specified global variables
        'no-restricted-globals': [
            2,
            'event',
            'name',
            'top',
            'History',
            'Text',
            'location',
            'history'
        ],
        // disallow declaration of variables already declared in the outer scope
        'no-shadow': 2,
        // disallow shadowing of names such as arguments
        'no-shadow-restricted-names': 2,
        // disallow use of undeclared variables unless mentioned in a /*global */ block
        'no-undef': 2,
        // disallow use of undefined when initializing variables
        'no-undef-init': 0,
        // disallow use of undefined variable
        'no-undefined': 0,
        // disallow declaration of variables that are not used in the code
        'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
        // disallow use of variables before they are defined
        'no-use-before-define': [2, { functions: false, classes: true }],

        // Node.js and CommonJS
        // These rules are specific to JavaScript running on Node.js or using CommonJS in the browser.
        // enforce return after a callback
        'callback-return': 0,
        // enforce require() on top-level module scope
        'global-require': 0,
        // enforce error handling in callbacks
        'handle-callback-err': 0,
        // disallow use of the Buffer() constructor
        'no-buffer-constructor': 0,
        // disallow mixing regular variable and require declarations
        'no-mixed-requires': [0, false],
        // disallow use of new operator with the require function
        'no-new-require': 0,
        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 0,
        // disallow use of process.env
        'no-process-env': 0,
        // disallow process.exit()
        'no-process-exit': 0,
        // restrict usage of specified modules when loaded by require function
        'no-restricted-modules': 0,
        // disallow use of synchronous methods
        'no-sync': 0,

        // Stylistic Issues
        // These rules are purely matters of style and are quite subjective.
        // require camel case names
        camelcase: [2, { properties: 'never' }],
        // enforce or disallow capitalization of the first letter of a comment
        'capitalized-comments': 0,
        // enforce consistent naming when capturing the current execution context
        'consistent-this': 2,
        // require function expressions to have a name
        'func-names': 0,
        // enforce use of function declarations or expressions
        'func-style': [0, 'declaration', { allowArrowFunctions: true }],
        // disallow certain identifiers to prevent them being used
        'id-blacklist': [2, 'e', 'cb', 'callback'],
        // enforce minimum and maximum identifier lengths (variable names, property names etc.)
        'id-length': [
            2,
            {
                min: 2,
                properties: 'never',
                exceptions: ['i', 'j', '$', '_'], // The name "x" was not added because developers started to abuse it.
            },
        ],
        // require identifiers to match the provided regular expression
        'id-match': 0,
        // enforce position of line comments
        'line-comment-position': 0,
        // require or disallow an empty line between class members
        // @todo enable it later after autofixing the whole project
        'lines-between-class-members': 1,
        // specify the maximum depth that blocks can be nested
        'max-depth': [2, 4],
        // enforce a maximum file length
        'max-lines': [2, 1000],
        // specify the maximum depth callbacks can be nested
        'max-nested-callbacks': [2, 3],
        // specify the number of parameters that can be used in the function declaration
        'max-params': [2, 4],
        // specify the maximum number of statement allowed in a function
        'max-statements': [2, 30],
        // specify the maximum number of statements allowed per line
        'max-statements-per-line': [2, { max: 1 }],
        // enforce a particular style for multiline comments
        'multiline-comment-style': 0,
        // require a capital letter for constructors
        'new-cap': [2, { newIsCap: true }],
        // disallow use of the Array constructor
        'no-array-constructor': 2,
        // disallow use of bitwise operators
        'no-bitwise': 2,
        // disallow use of the continue statement
        'no-continue': 0,
        // disallow comments inline after code
        'no-inline-comments': 0,
        // disallow if as the only statement in an else block
        'no-lonely-if': 0,
        // disallow use of chained assignment expressions
        'no-multi-assign': 2,
        // disallow negated conditions
        'no-negated-condition': 0, // TODO enable?
        // disallow nested ternary expressions
        'no-nested-ternary': 2,
        // disallow the use of the Object constructor
        'no-new-object': 2,
        // disallow use of unary operators, ++ and --
        'no-plusplus': 0,
        // disallow use of certain syntax in code
        'no-restricted-syntax': [2, 'ForOfStatement', 'YieldExpression'],
        // disallow the use of ternary operators
        'no-ternary': 0,
        // disallow dangling underscores in identifiers
        'no-underscore-dangle': [0, { allowAfterThis: true, allowAfterSuper: false }], // TODO enable?
        // disallow the use of ternary operators when a simpler alternative exists
        'no-unneeded-ternary': [2, { defaultAssignment: false }],
        // require or disallow one variable declaration per function
        'one-var': [2, 'never'],
        // require assignment operator shorthand where possible or prohibit it entirely
        'operator-assignment': 0,
        // require or disallow padding lines between statements
        // @todo enable it later after autofixing the whole project
        'padding-line-between-statements': [
            0,
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: 'directive', next: '*' },
            { blankLine: 'any', prev: 'directive', next: 'directive' },
        ],
        // require JSDoc comment
        'require-jsdoc': 0, // TODO enable?
        // require object keys to be sorted
        'sort-keys': 0,
        // enforce sorting import declarations within module
        'sort-imports': 0,
        // require symbol descriptions
        'symbol-description': 2,
        // enforce sorting variables within the same declaration block
        'sort-vars': 0,
        // require or disallow a space immediately following the // or /* in a comment
        // @todo enable it later after autofixing the whole project
        'spaced-comment': [
            0,
            'always',
            {
                line: {
                    markers: ['/'],
                    exceptions: ['-', '+'],
                },
                block: {
                    markers: ['!'],
                    exceptions: ['*'],
                    balanced: true,
                },
            },
        ],

        // ECMAScript 6
        // These rules are only relevant to ES6 environments.
        // ensure calling of super() in constructors
        'constructor-super': 2,
        // disallow modifying variables of class declarations
        'no-class-assign': 2,
        // disallow modifying variables that are declared using const
        'no-const-assign': 2,
        // disallow duplicate name in class members
        'no-dupe-class-members': 2,
        // disallow duplicate module imports
        'no-duplicate-imports': 2,
        // disallow use of the new operator with the Symbol object
        'no-new-symbol': 2,
        // restrict usage of specified modules when loaded by import declaration
        'no-restricted-imports': 0,
        // disallow use of this/super before calling super() in constructors
        'no-this-before-super': 2,
        // disallow unnecessary computed property keys in object literals
        'no-useless-computed-key': 2,
        // disallow unnecessary constructor
        'no-useless-constructor': 2,
        // disallow renaming import, export, and destructured assignments to the same name
        'no-useless-rename': 2,
        // require let or const instead of var
        'no-var': 2,
        // require method and property shorthand syntax for object literals
        'object-shorthand': [2, 'always'],
        // suggest using const declaration for variables that are never reassigned after declared
        'prefer-const': [2, { destructuring: 'all' }],
        // require destructuring from arrays and/or objects
        'prefer-destructuring': [
            0,
            {
                // TODO enable?
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: true,
                },
            },
            {
                enforceForRenamedProperties: true,
            },
        ],
        // disallow parseInt() in favor of binary, octal, and hexadecimal literals
        'prefer-numeric-literals': 2,
        // suggest using the rest parameters instead of arguments
        'prefer-rest-params': 1,
        // suggest using the spread operator instead of .apply()
        'prefer-spread': 0,
        // suggest using template literals instead of strings concatenation
        'prefer-template': 2,
        // disallow generator functions that do not have yield
        'require-yield': 0,
    },
};
