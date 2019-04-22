**Please Read!!**

Steps to start the server:

*  clone repository if not already done
*  open terminal and cd to first-order/server
*  run "npm install" to install all needed packages
*  to run the development server, type "npm run dev"
*  Install RethingDB and run it in default settings

**To Test Read and Input**
* open "localhost:5000/graphql"
* To Write to DB user following query.
* mutation{
  createRocket(userInput:{
    name: "someName",
    date: "someDate"
  }){
    name
    date
  }
}
* to get all Rockets, type:


*Name of Table and Database are just for now. Will change as soon as we continue with development*