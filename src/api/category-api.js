import Boom from "@hapi/boom";
import { Category } from "../models/mongo/category.js";

export const categoriesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const categories = await Category.find();
      return categories;
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const category = await Category.findOne({ _id: request.params.id });
        if (!category) {
          return Boom.notFound("No Candidate with this id");
        }
        return category;
      } catch (err) {
        return Boom.notFound("No Candidate with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      let newCategoryName = request.payload.name;
      let newCategoryUser = request.auth.credentials;
      const newCategory = new Category({ name: newCategoryName, user: newCategoryUser });
      newCategory.name = newCategory.name.toLowerCase();
      const category = await newCategory.save();
      if (category) {
        return h.response(category).code(201);
      }
      return Boom.badImplementation("error creating category");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Category.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Category.deleteOne({ _id: request.params.id });
      if (response.deletedCount == 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};
