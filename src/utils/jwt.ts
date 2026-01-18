import jwt, { Secret, SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export const signToken = (payload: object): string => {
  const secret: Secret = env.JWT_SECRET;

  const options: SignOptions = {
    expiresIn: parseInt(env.JWT_EXPIRES_IN, 10),
  };

  return jwt.sign(payload, secret, options);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT_SECRET);
};
