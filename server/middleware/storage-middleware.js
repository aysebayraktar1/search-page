/* eslint-disable no-undef */
import Iphone11Purple from "../model/iphone-11-purple.js";
import Iphone11White from "../model/iphone-11-white.js";
import Iphone12Black from "../model/iphone-12-black.js";
import HuaweiP40 from "../model/huawei-p40.js";

export default function () {
  return function (req, res, next) {
    let i;
    res.local = {
      products: [],
    };

    for (i = 0; i < 9; i++) {
      let id = i * 4;
      res.local.products.push(new Iphone11Purple(id + 1));
      res.local.products.push(new Iphone11White(id + 2));
      res.local.products.push(new Iphone12Black(id + 3));
      res.local.products.push(new HuaweiP40(id + 4));
    }

    next();
  };
}
