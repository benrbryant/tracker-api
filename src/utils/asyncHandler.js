/**
 * Util returns an async wrapper function to complete or handle errors within express middleware controllers
 * @param {Function} fn - Function Controller
 * @returns {void}
 */
export default function asyncHandler(fn) {
  return async function asyncWrapper(req, res, next) {
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}
