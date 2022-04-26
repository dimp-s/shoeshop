import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('asdfgh', 10),
    isAdmin: true,
  },
  {
    name: 'yub',
    email: 'yub@gmail.com',
    password: bcrypt.hashSync('asdfgh', 10),
  },
];

export default users;
