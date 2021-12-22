import express from "express";
import Storage from "./middleware/storage-middleware.js";
import BrandFilter from "./middleware/brand-filter-middleware.js";
import Sorting from "./middleware/sorting-middleware.js";
import ColorFilter from "./middleware/color-filter-middleware.js";

import cors from 'cors'

const app = express();
app.use(cors())

app.use(express.json());
app.use(Storage());
app.use(BrandFilter());
app.use(ColorFilter());
app.use(Sorting());

app.post("/products", function (req, res) {
  res.send(res.local.products);
});

app.listen(5000);
