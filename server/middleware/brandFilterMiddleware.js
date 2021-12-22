/* eslint-disable no-prototype-builtins */
export default function () {
  return function (req, res, next) {
    res.local.products = res.local.products.filter(function (product) {
      if (
        !req.body.hasOwnProperty("brandFilter") ||
        req.body.brandFilter === null
      ) {
        return true;
      }

      return product.brand === req.body.brandFilter;
    });

    next();
  };
}
