import bcrypt from "bcryptjs";
//var bcrypt = require('bcryptjs');

/*
const crypt_hash = (password: string): string => {
  return bcrypt.hashSync(
    password + process.env.BCRYPT_PEPPER,
    parseInt(process.env.SALT_ROUNDS as string)
  );
};

const crypt_compare = (password: string, user_password: string): boolean => {
  return bcrypt.compareSync(
    (password + process.env.BCRYPT_PEPPER) as string,
    user_password
  );
};
*/

//var bcrypt = require('bcryptjs');
//var salt = bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS as string);
const crypt_hash = (password: string): string => {
  return bcrypt.hashSync(
    password + process.env.BCRYPT_PEPPER, 
    bcrypt.genSaltSync(parseInt(process.env.SALT_ROUNDS as string)));
  };
// Store hash in your password DB.

const crypt_compare = (password: string, hashedPassword: string): boolean => {
  return bcrypt.compareSync(password + process.env.BCRYPT_PEPPER, hashedPassword); // true
//bcrypt.compareSync("not_bacon", hash); // false
};
export { crypt_hash, crypt_compare };
