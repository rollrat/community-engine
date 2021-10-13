var modules = [];

async function run_test() {
  for (var module of modules) {
    for (var key in module) {
      try {
        var result = await module[key]();

        console.log(
          "(not throw)",
          key,
          ":",
          result ? "\x1b[32mSuccess\x1b[0m" : "\x1b[31mFail\x1b[0m"
        );
      } catch (e) {
        console.log("(throw)", key, ":", "\x1b[31mFail\x1b[0m");
        console.log(e);
      }
    }
  }
}

run_test().then();
