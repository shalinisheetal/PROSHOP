import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Shalini Sheetal",
    email: "shalini@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ayushman Khuranna",
    email: "aka@example.com",
    password: bcrypt.hashSync("678910", 10),
  },
];

export default users;
