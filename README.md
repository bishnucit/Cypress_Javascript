# CYPRESS - JAVASCRIPT - AUTOMATION - Consists all possible kinds of code that can be used in cypress automation testing.
--------------------------------------------------------------------------------------------------------------
Use the below commands to install the dependent packages - 
--------------------------------------------------------------------------------------------------------------
npm install cypress-fail-on-console-error 
--------------------------------------------------------------------------------------------------------------
npm install cypress-file-upload
--------------------------------------------------------------------------------------------------------------
npm install cypress-downloadfile (install global level)
--------------------------------------------------------------------------------------------------------------
npm install --save-dev cypress (install project level)
--------------------------------------------------------------------------------------------------------------
.\node_modules\.bin\cypress.cmd install --force (sometimes installing doesnot work so we need force reinstall)
--------------------------------------------------------------------------------------------------------------
npx cypress open - with exe (opens up the cypress exe test runner)
--------------------------------------------------------------------------------------------------------------
npx cypress run   (runs all cypress tests in headless mode)
--------------------------------------------------------------------------------------------------------------
npx cypress run --headed   (runs all cypress tests in ui mode)
--------------------------------------------------------------------------------------------------------------
npx cypress run --spec "location_to_spec" (runs a single spec file)
--------------------------------------------------------------------------------------------------------------
npx cypress run --browser chrome (runs on a particular browser instead of default)
--------------------------------------------------------------------------------------------------------------
npx cypress run  --record --spec "location_to_spec" (runs a single spec file and records on dashboard)
--------------------------------------------------------------------------------------------------------------

Description of Website Under Tests:
welcome.spec.js -  https://example.cypress.io/todo - Todo app
--------------------------------------------------------------------------------------------------------------
sitetwo.spec.js - http://the-internet.herokuapp.com/ - Automation Practice Website
--------------------------------------------------------------------------------------------------------------
sitethree.spec.js - http://automationpractice.com/ - Wordpress sample store for automation
--------------------------------------------------------------------------------------------------------------
sitefour.spec.js - https://github.com/cypress-io/cypress-realworld-app - React app 
--------------------------------------------------------------------------------------------------------------
