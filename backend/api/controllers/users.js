import { v4 as uuid } from "uuid";

let users = [];

// Get Users
export const getUsers = (req, res) => {
  res.send(users);
};

// Create User
export const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuid });
  res.send("User Created Successfully!");
};

// Get Single User
export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);

  res.send(singleUser);
};

// Delete User
export const deleteUser = (req, res) => {
  const users = users.filter((user) => user.id !== req.params.id);

  res.send("User Deleted Successfully!");
};

// Update User
export const updateUser = (req, res) => {
  const user = users.find((user) => user.id === req.params.id);

  res.name = req.body.name;

  res.send("User Updated Successfully!");
};
