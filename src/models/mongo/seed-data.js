export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "$2a$10$9WeULmHX1wAxpRhep7LWeerce9wpG2PrnaJt2zAdCQcCwjT5sR4rO",
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "$2a$10$n3hcrfOOv.mmfzOkILPZpO89TtNO9bTIXtgVRF3/DKK045oAgirNq",
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "$2a$10$SDgklI0ar/VmJh19jB7ul.6qqcuk/kMjIkIEXoWEs4rVzhZbk5n56",
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
