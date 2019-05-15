import * as restaurantResolver from "./resolverGenerator/restaurantResolver";
import * as userResolver from "./resolverGenerator/userResolver";
import * as businessUserResolver from "./resolverGenerator/businessUserResolver";
import * as productResolver from "./resolverGenerator/productResolver";
//Collects and exports all resolvers from exampleResolver folder
export default {
    ...restaurantResolver,
    ...userResolver,
    ...businessUserResolver,
    ...productResolver
};
