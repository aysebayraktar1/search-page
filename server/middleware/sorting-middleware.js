/* eslint-disable no-prototype-builtins */
export default function () {
  return function (req, res, next) {
    res.local.products.sort(function (productA, productB) {
      req.body.sortMethod = req.body.hasOwnProperty("sortMethod")
        ? req.body.sortMethod
        : null;

      switch (req.body.sortMethod) {
        case "recentAsc":
          return productA.createdAt > productB.createdAt
            ? 1
            : productA.createdAt < productB.createdAt
            ? -1
            : 0;
        case "recentDesc":
          return productA.createdAt > productB.createdAt
            ? -1
            : productA.createdAt < productB.createdAt
            ? 1
            : 0;
        case "priceAsc":
          return productA.price > productB.price
            ? 1
            : productA.price < productB.price
            ? -1
            : 0;
        default:
          return productA.price > productB.price
            ? -1
            : productA.price < productB.price
            ? 1
            : 0;
      }
    });

    next();
  };
}
