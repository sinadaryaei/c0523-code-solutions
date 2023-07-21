/* eslint-disable no-unused-vars -- Remove me */
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

export function authorizationMiddleware(req, res, next) {
  // Get the 'Authorization' header from the request
  const authHeader = req.get('Authorization');

  // Parse the token from the header
  let token = null;
  if (authHeader) {
    const parts = authHeader.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }

  // If no header or no token is provided
  if (!authHeader || !token) {
    throw new ClientError(401, 'authentication required');
  }

  try {
    // Verify the token and extract its payload
    const payload = jwt.verify(token, 'your-secret-key'); // replace 'your-secret-key' with your actual key

    // Assign the extracted payload to the user property of the req object
    req.user = payload;

    // Call next() to advance to the next middleware
    next();
  } catch (err) {
    // If the token is invalid or expired, send a 401 error
    throw new ClientError(401, 'authentication required');
  }
}
