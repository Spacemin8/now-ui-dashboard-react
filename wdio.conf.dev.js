let path = require("path");
let notifier = require("node-notifier");

let VisualRegressionCompare = require("wdio-visual-regression-service/compare");
function getScreenshotName(folder, context) {
  const type = context.type;
  const testParent = context.test.parent;
  const testName = context.test.title;
  const browserVersion = parseInt(context.browser.version, 10);
  const browserName = context.browser.name;
  const browserViewport = context.meta.viewport;
  const browserWidth = browserViewport.width;
  const browserHeight = browserViewport.height;

  return path.join(
    process.cwd(),
    folder,
    `${testParent}_${testName}_${type}_${browserName}_v${browserVersion}_${browserWidth}x${browserHeight}.png`
  );
}

/** Prod Config File */
let prodConfig = require("./wdio.conf.js").config;

let localConfig = Object.assign(prodConfig, {
  baseUrl: "http://localhost:3000",
  specs: ["./tests/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      maxInstances: 1,
      loggingPrefs: {
        driver: "ALL",
        browser: "ALL"
      }
    }
  ],

  services: ["selenium-standalone", "visual-regression", "static-server"],

  visualRegression: {
    compare: new VisualRegressionCompare.LocalCompare({
      referenceName: getScreenshotName.bind(null, "screenshots/baseline"),
      screenshotName: getScreenshotName.bind(null, "screenshots/latest"),
      diffName: getScreenshotName.bind(null, "screenshots/diff")
    }),
    viewportChangePause: 300,
    viewports: [
      { width: 375, height: 667 }, // Iphone 6/7/8
      { width: 414, height: 736 }, // Iphone 6/7/8 +
      { width: 1280, height: 720 }
    ],
    orientations: ["landscape", "portrait"]
  },

  reporters: ["concise", "slack"],
  seleniumInstallArgs: { version: "3.4.0" },
  seleniumArgs: { version: "3.4.0" },
  reporterOptions: {
    slack: {
      notify: true,
      webhook: process.env.SLACK_WEBHOOK,
      notifyOnlyOnFailure: true,
      username: "Running Tests Report",
      message: "Black Dashboard Free React"
    }
  },
  onPrepare: function(config, capabilities) {
    notifier.notify({
      title: "Now UI React Dashboard",
      message: "Test run started"
    });
  },

  afterTest(test) {},
  onComplete: function(exitCode) {
    notifier.notify({
      title: "Now UI React Dashboard",
      message: "Tests finished running."
    });
  }
});

delete localConfig.user;
delete localConfig.key;
delete localConfig.sauceConnect;

exports.config = localConfig;
