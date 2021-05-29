import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

const Recipe = new GraphQLObjectType({
  name: "Recipe",
  description: "This represents a Recipe",
  fields: () => {
    return {
      recipe_id: {
        type: GraphQLInt,
      },
      title: {
        type: GraphQLString,
      },
      summary: {
        type: GraphQLString,
      },
      image: {
        type: GraphQLString,
      },
      is_savored: {
        type: GraphQLBoolean,
      },
      cuisine: {
        type: GraphQLString,
      },
      diet: {
        type: GraphQLString,
      },
      user_id: {
        type: GraphQLInt,
      },
    };
  },
});

export default Recipe;
