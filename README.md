**Please Read!!**

Steps to start the server:

*  clone repository if not already done
*  open terminal and cd to first-order/server
*  run "npm install" to install all needed packages
*  to run the development server, type "npm run dev"
*  Install RethingDB and run it in default settings
**JUST FOR TESTING, otherwise current server can't connect to DB** 
*  Open RethingDB Dashboard and check if a database exists, if not, create one
*  Create Table named "Rockets"
**To Test Read and Input**
* open "localhost:5000/graphql"
* To Write to DB user following query, but change ID so it is unique: 
* mutation{
  createRocket(userInput:{
    id: "01",
    name: "Falcon Heavy",
    date: "20.05.1029"
  }){
    id
    name
    date
  }
}

*Name of Table and Database are just for now. Will change as soon as we continue with development*