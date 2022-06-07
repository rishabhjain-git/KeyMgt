import customer from "../models/customerModel.js";

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
  try {
    await customer.create(req.body);
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
