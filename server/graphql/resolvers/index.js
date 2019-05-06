import * as restaurantResolver from "./resolverGenerator/restaurantResolver";
import * as userResolver from "./resolverGenerator/userResolver";
import * as businessUserResolver from "./resolverGenerator/businessUserResolver";
//Collects and exports all resolvers from exampleResolver folder
export default {
  ...restaurantResolver,
  ...userResolver,
  ...businessUserResolver
};
