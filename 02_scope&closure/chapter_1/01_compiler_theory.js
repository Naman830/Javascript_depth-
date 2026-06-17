var a = 2;

// How the JavaScript Compiler Works
/*
JavaScript code goes through 4 phases:

1. Source Code
   - The code you write.

2. Parsing
   During parsing, two things happen:

   a. Tokenization (Lexical Analysis)
      - The code is broken into tokens.
      - Example:

        var a = 2;

        "var" → token
        "a"   → token
        "="   → token
        "2"   → token
        ";"   → token

      - Whitespace is generally ignored unless it affects syntax.

   b. AST (Abstract Syntax Tree)
      - The parser converts the tokens into a tree-like structure.
      - This tree represents the grammatical structure of the code.

3. Compilation
   - The JavaScript engine uses the AST to generate executable instructions.
   - It also performs optimizations before execution.

4. Execution
   - The execution phase begins.
   - The Execution Context is created.
   - Memory is allocated for variables and functions.
   - Then the code is executed line by line and values are assigned.
*/

/*
The actual flow inside engines like V8 is usually:
Source Code
    ↓
Tokenizer (Lexer)
    ↓
Parser
    ↓
AST
    ↓
Interpreter / Compiler
    ↓
Execution
*/
