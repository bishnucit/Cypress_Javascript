import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

Cypress.on('fail', (error, runnable) => {
  debugger

  // we now have access to the err instance
  // and the mocha runnable this failed on

  throw error // throw error to have test still fail
})
