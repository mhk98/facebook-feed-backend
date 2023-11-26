const db = require("../../models");
const Post = db.post;

exports.createpost = async (req, res) => {
  try {
    const {
      content,
      background,
      
    } = req.body;

    const data = {
      content,
      Image: req.file.path,
      background,
      
    };
    const post = await Post.create(data);
    console.log("result", req.file);
    res.status(200).send({
      status: "Success",
      message: "Successfully created post",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getAllpost = async (req, res) => {
  try {
    const post = await Post.findAll();

    res.status(200).send({
      status: "Success",
      message: "Successfully got all post",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.singlepost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({
      where: { post_Id: id },
    });

    if (!post) {
      return res.status(401).send({
        status: "fail",
        message: "No post found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully got your post",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
exports.deletepost = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.destroy({
      where: { post_Id: id },
    });

    if (!post) {
      return res.status(401).send({
        status: "fail",
        message: "No post found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully delete your post",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.updatepost = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const post = await Post.update(data, {
      where: { post_Id: id },
    });

    if (!post) {
      return res.status(401).send({
        status: "fail",
        message: "No post found",
      });
    }
    res.status(200).send({
      status: "Success",
      message: "Successfully update your post",
      data: post,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message,
    });
  }
};
