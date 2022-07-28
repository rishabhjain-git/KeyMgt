import express from "express";

import {
  getAllCustomers,
  createCustomer,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  upload,
} from "../controllers/Customers.js";

import { login } from "../controllers/users.js";

const router = express.Router();

router.post("/login", login);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.post("/", upload, createCustomer);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

export default router;
