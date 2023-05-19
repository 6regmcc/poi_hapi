import { Poi } from "./poi.js";

export const poiMongoStore = {
  async getAllPois() {
    const pois = await Poi.find().lean();
    return pois;
  },

  async getPoisByCategory(id) {
    const pois = await Poi.find({ category: id });
    return pois;
  },

  async create_poi(name, latitude, longitude, description, user, category) {
    const newPoi = new Poi({
      name,
      latitude,
      longitude,
      description,
      user: user._id,
      category: category._id,
      categoryText: category.name,
    });
    await newPoi.save();
    return newPoi;
  },

  async deleteAll() {
    await Poi.deleteMany({});
  },
};
