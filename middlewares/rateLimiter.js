

import { Filter } from 'bad-words'

const userLimits = new Map();

const rateLimiter = (userId) => {
  const now = Date.now();
  const windowMs = process.env.RATE_LIMIT_WINDOW;
  const maxRequests = process.env.RATE_LIMIT_MAX;

  if (!userLimits.has(userId)) {
    userLimits.set(userId, []);
  }

  const userRequests = userLimits.get(userId);

  while (userRequests.length > 0 && userRequests[0] < now - windowMs) {
    userRequests.shift();
  }
  if (userRequests.length >= maxRequests) {
    return false;
  }

  userRequests.push(now);
  return true;
};
const filter = new Filter();

const profanityFilter = (message) => {
  const isClean = !filter.isProfane(message);
  const cleanMessage = filter.clean(message); 

  return { isClean, cleanMessage };
};
export { rateLimiter, profanityFilter };
