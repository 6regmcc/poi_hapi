import { userMongoStore } from "./mongo/user-mongo-store.js";
import { poiMongoStore } from "./mongo/poi-mongo-store.js";
import { categoryMongoStore } from "./mongo/categories-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  poiStore: null,
  categoryStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.poiStore = poiMongoStore;
        this.categoryStore = categoryMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};
