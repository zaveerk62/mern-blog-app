import jwt from 'jsonwebtoken';
import {errorHandler} from './error.js';

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.access_token;
};