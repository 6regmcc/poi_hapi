export const categoriesController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("Categories", { title: "Create a new Category", user: loggedInUser });
    },
  },
  report: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      return h.view("Report", {
        title: "List of categories",
        user: loggedInUser,
      });
    },
  },
  createCategory: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};
