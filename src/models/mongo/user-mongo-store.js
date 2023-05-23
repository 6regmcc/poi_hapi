import { User } from "./user.js";

export const userMongoStore = {
  async getAllUsers() {
    const users = await User.find().lean();
    return users;
  },

  async getUserById(id) {
    if (id) {
      const user = await User.findOne({ _id: id }).lean();
      return user;
    }
    return null;
  },

  async addUser(user) {
    const newUser = new User(user);
    const userObj = await newUser.save();
    const u = await this.getUserById(userObj._id);
    return u;
  },

  async getUserByEmail(email) {
    const user = await User.findOne({ email: email }).lean();
    return user;
  },

  async deleteUserById(id) {
    try {
      await User.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAll() {
    await User.deleteMany({});
  },

  async editUser(id, newUserDetails) {
    console.log(id);
    console.log(newUserDetails);
    let user = await User.findOne({ _id: id });

    if (newUserDetails.firstName) {
      user.firstName = newUserDetails.firstName;
    }
    if (newUserDetails.lastName) {
      user.lastName = newUserDetails.lastName;
    }
    if (newUserDetails.email) {
      user.email = newUserDetails.email;
    }
    if (newUserDetails.password) {
      user.password = newUserDetails.password;
    }
    await user.save();
  },
};
