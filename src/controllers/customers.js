import customer from "../models/customerModel.js";
import multer from "multer";
import path from "path";

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await customer.findAll();
    res.json(customers);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const data = await customer.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(data[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createCustomer = async (req, res) => {
  console.log("req.file is...",req.file.path);
  try {
    let info = {
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      product_id: req.body.product_id,
      product_creation_loc: req.body.product_creation_loc,
      vechicle_model: req.body.vechicle_model,
      vechicle_number: req.body.vechicle_number,
      amount: req.body.amount,
      key_number: req.body.key_number,
      bank_name: req.body.bank_name,
      essential_doc: req.body.bank_name,
      image: req.file.path,
    };
    await customer.create(info);
    res.json({
      message: "Customer Created",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
  try {
    await customer.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Customer Updated",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  try {
    await customer.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Customer Deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
}).single("image");
