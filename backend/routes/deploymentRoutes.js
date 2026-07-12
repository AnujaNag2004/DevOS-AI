const express = require("express");

const router = express.Router();

const {
  generateDeploymentGuide,
} = require("../controllers/deploymentController");

router.post("/", generateDeploymentGuide);

module.exports = router;