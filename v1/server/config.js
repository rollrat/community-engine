const fs = require("fs");
const yaml = require("yaml");

const config_path = process.env.CE_CONFIG_FILE;
const config_yaml = fs.readFileSync(config_path, "utf-8");

var config = yaml.parse(config_yaml);

module.exports = config;
