// User Model
class UserModel {
  constructor(user_id, fname, lname, company, title, email, access, role) {
    this.user_id = user_id;
    this.user_metadata.given_name = fname;
    this.user_metadata.family_name = lname;
    this.user_metadata.manufacturer = company;
    this.user_metadata.title = title;
    this.email = email;
    this.app_metadata.access = access;
    this.app_metadata.role = role;
  }
}

module.exports = UserModel;
