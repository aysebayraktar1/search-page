import express from "express";
import Storage from "./middleware/storageMiddleware.js";
import BrandFilter from "./middleware/brandFilterMiddleware.js";
import Sorting from "./middleware/sortingMiddleware.js";
import ColorFilter from "./middleware/colorFilterMiddleware.js";

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
