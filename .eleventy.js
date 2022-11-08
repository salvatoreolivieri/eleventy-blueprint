module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
