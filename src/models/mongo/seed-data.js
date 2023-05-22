export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret",
    },
  },
  categories: {
    _model: "Category",
    hike: {
      name: "hike",
    },
    monument: {
      name: "monument",
    },
    parking: {
      name: "parking",
    },
    woods: {
      name: "woods",
    },
  },
  pois: {
    _model: "Poi",
    ticknock: {
      name: "Ticknock",
      latitude: 53.25560479525067,
      longitude: -6.2510505862023376,
      description: "Ticknock woods",
      user: "->users.homer",
      category: "->categories.hike",
      categoryText: "hike",
    },
  },
};
