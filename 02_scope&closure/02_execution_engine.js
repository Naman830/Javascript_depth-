// The Cast
var a = 2;

/*
1. Engine: Responsible for starting and finishing compilation and execution in JavaScript.
2. Compiler: Handles all the work of parsing and code generation.
3. Scope: Maintains declared variables and enforces rules on them for the currently executing code.

Two distinct actions are taken for a variable assignment:
First, the Compiler declares a variable (if it has not already been declared in the current scope).
Second, during execution, the Engine looks up the variable in Scope and assigns a value to it if found.
*/

// Execution Context works in two phases. It creates two things:
// 1. Memory Component (Variable Environment)
// 2. Code Component (Thread of Execution)
//
// During the Memory Component phase, variables and function declarations are stored in memory.
// During the Code Component phase, code executes line by line.
//
// When a function is invoked, a new Execution Context is created with its own
// Memory Component and Code Component.
