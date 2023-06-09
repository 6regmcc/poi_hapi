import { userApi } from "./api/users-api.js";
import { poiApi } from "./api/poi-api.js";
import { categoriesApi } from "./api/category-api.js";

export const apiRoutes = [
  { method: "GET", path: "/api/users", config: userApi.find },
  { method: "GET", path: "/api/users/email", config: userApi.findByEmil },
  { method: "POST", path: "/api/users", config: userApi.create },
  { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
  { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
  { method: "PATCH", path: "/api/users/{id}", config: userApi.editUser },
  { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET", path: "/api/pois", config: poiApi.findAll },
  { method: "GET", path: "/api/categories/{id}/poi", config: poiApi.findByCategory },

  { method: "POST", path: "/api/categories/{id}/poi", config: poiApi.createPoi },

  { method: "DELETE", path: "/api/pois", config: poiApi.deleteAll },

  { method: "GET", path: "/api/poi/{poi_id}", config: poiApi.findPoiById },
  { method: "PATCH", path: "/api/poi/{poi_id}/removeImage", config: poiApi.removeImage },
  { method: "DELETE", path: "/api/categories/{id}/poi/{poi_id}", config: poiApi.deletePoi },
  { method: "PATCH", path: "/api/categories/{id}/poi/{poi_id}", config: poiApi.editPoi },
  { method: "PATCH", path: "/api/poi/{poi_id}/image", config: poiApi.addImage },
  { method: "GET", path: "/api/categories", config: categoriesApi.find },
  { method: "GET", path: "/api/categories/{id}", config: categoriesApi.findOne },
  { method: "POST", path: "/api/categories", config: categoriesApi.create },
  { method: "DELETE", path: "/api/categories/{id}", config: categoriesApi.deleteOne },
];
