// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

const addContext = require('mochawesome/addContext');

Cypress.on('after:screenshot',(details) => {
})

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {
        console.log(test,runnable)
        // addContext({ test }, `./screenshots/${runnable.parent.title} -- ${test.title} (failed).png`)
    }
});
