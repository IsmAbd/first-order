**Please Read!!**

Steps to start the server:

*  clone repository if not already done
*  open terminal and cd to first-order/server
*  run "npm install" to install all needed packages
*  to run the development server, type "npm run dev"
*  Install RethingDB and run it in default settings

**To Test Read and Input**
* open "localhost:5000/graphql" to test queries
* 

Steps to run the population script: 
*  Pull again and go to the server directory and run "npm install && npm update".
*  Open the Rethinkdb page on http://localhost:8080/#tables, check all tables and delete them.
*  Back to the server directory, run "npm run stable" and in a different terminal, run "run npm populateDB"
*  After the script is done you should have 3 BusinessUser, each of them has an own Restaurant and each of the Restaurants has 3 Categories.