const restaurantResolver = require("./resolverGenerator/restaurantResolver");
const userResolver = require("./resolverGenerator/userResolver");
const businessUserResolver = require("./resolverGenerator/businessUserResolver");
const categoryResolver = require("./resolverGenerator/categoryResolver");
const productResolver = require("./resolverGenerator/productResolver");

//Collects and exports all resolvers from exampleResolver folder

export default {
    ...restaurantResolver,
    ...userResolver,
    ...businessUserResolver,
    ...categoryResolver,
    ...productResolver
};
