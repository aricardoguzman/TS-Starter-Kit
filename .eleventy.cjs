const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    templateExtensionAliases: {
      "11ty.cjs": "11ty.js",
      "11tydata.cjs": "11tydata.js"
    }
  };
};
