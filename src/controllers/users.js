import user from "../models/userModel.js";

export const login = async (req, res) => {
    try {
        const data = await user.findAll({
          where: {
            username: req.body.username,
          },
        });
        res.json(data[0]);
      } catch (error) {
        res.json({ message: error.message });
      }
};

