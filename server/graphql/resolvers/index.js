import * as restaurantResolver from "./resolverGenerator/restaurantResolver";
import * as userResolver from "./resolverGenerator/userResolver";
//Collects and exports all resolvers from exampleResolver folder
export default {
  ...restaurantResolver,
  ...userResolver
};
