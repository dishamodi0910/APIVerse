import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

const createUserToken = (user) => {
  const payload = {
    id: user._id,
    email: user.email,
    fullName: user.fullName,
  };
  const token = jwt.sign(payload, jwtSecret);
  return token;
};

const validateToken = (token) => {
  const payload = jwt.verify(token, jwtSecret);
  return payload;
};

export default { createUserToken, validateToken };
