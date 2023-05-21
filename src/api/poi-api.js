import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const poiApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const pois = db.poiStore.getAllPois();
      return pois;
    },
  },
  findByCategory: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const pois = await db.poiStore.getPoisByCategory(request.params.id);
      return pois;
    },
  },

  createPoi: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const categoryText = await db.categoryStore.findById(request.payload.category_id);
      if (!categoryText) {
        return Boom.notFound("No category with this id" + " id is " + request.payload.category_id);
      }

      const poi = await db.poiStore.create_poi(
        request.payload.name,
        request.payload.latitude,
        request.payload.longitude,
        request.payload.description,
        request.auth.credentials,
        request.payload.category_id,
        categoryText.name
      );
      return poi;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.poiStore.deleteAll();
      return { success: true };
    },
  },
};
