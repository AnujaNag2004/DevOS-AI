const Chat = require("../models/Chat");

exports.getDashboardStats = async (req, res) => {
  try {
    const totalChats = await Chat.countDocuments();

    const totalMessages = await Chat.aggregate([
      {
        $project: {
          count: {
            $size: "$messages",
          },
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$count",
          },
        },
      },
    ]);

    res.json({
      totalChats,
      totalMessages:
        totalMessages.length > 0 ? totalMessages[0].total : 0,

      totalReviews: totalChats,
      totalBugFixes: totalChats,
      totalDocs: totalChats,
      totalDeployments: totalChats,
      githubAnalyses: totalChats,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Unable to fetch dashboard",
    });

  }
};