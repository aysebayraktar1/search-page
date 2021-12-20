/* eslint-disable no-prototype-builtins */
export default function () {
  return function (req, res, next) {
    res.local.products = res.local.products.filter(function (product) {
      if (
        !req.body.hasOwnProperty("colorFilter") ||
        req.body.colorFilter === null
      ) {
        return true;
      }

      return product.color === req.body.colorFilter;
    });

    next();
  };
}
