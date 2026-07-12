const User = require("../models/User");

exports.getSettings = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Unable to fetch settings",
    });
  }
};

exports.updateSettings = async (req, res) => {
  try {
    const { name, theme, preferredModel } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      {
        name,
        theme,
        preferredModel,
      },
      { new: true }
    ).select("-password");

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: "Unable to update settings",
    });

  }
};