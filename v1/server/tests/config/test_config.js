const config = require('../../config');

async function test_config() {
  var result = Object.keys(config).length !== 0;

  return result == true;
}

module.exports = {
  "test-config": test_config,
};