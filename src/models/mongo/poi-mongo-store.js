import { Poi } from "./poi.js";
import { Category } from "./category.js";

export const poiMongoStore = {
  async getAllPois() {
    const pois = await Poi.find().lean();
    return pois;
  },

  async getPoisByCategory(id) {
    const pois = await Poi.find({ category: id });
    return pois;
  },

  async create_poi(name, latitude, longitude, description, user, category_id, categoryText) {
    const newPoi = new Poi({
      name: name,
      latitude: latitude,
      longitude: longitude,
      description: description,
      user: user._id,
      category: category_id,
      categoryText: categoryText,
    });
    await newPoi.save();
    return newPoi;
  },

  async deleteAll() {
    await Poi.deleteMany({});
  },

  async findById(id) {
    const poi = await Category.findOne({ _id: id }).lean();
    return poi;
  },

  async deletePoi(id) {
    try {
      await Poi.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },
};
