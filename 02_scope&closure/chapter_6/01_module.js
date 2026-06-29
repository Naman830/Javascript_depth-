// 🏦 The Bank Account Analogy
// A bank account keeps your balance (private data) inside a vault. You can't reach in and grab the money directly. But you have an API: deposit(), withdraw(), getBalance(). These functions have special access to the vault. The module pattern works exactly this way — private data, public API.

/*
Requirements for a module

1. Outer function
Must be called at least once to create the module's private scope.

2. Inner functions returned
At least one inner function returned, creating closure over the private scope.

3. Private data
Variables inside the outer function that only the inner functions can access.

4. Public API
The returned object containing only what you want to expose.
*/
