import { Category } from "./category.js";

export const categoryMongoStore = {
  async getAllCandidates() {
    const categories = await Category.find().lean();
    return categories;
  },

  async findById(id) {
    const category = await Category.findOne({ _id: id }).lean();
    return category;
  },

  async findByName(name) {
    const category = await Category.findOne({
      name,
    });
    return category;
  },
};
