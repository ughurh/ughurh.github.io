module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy("src/google9342f469cdbef876.html");

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
    templateFormats: [
      'html',
      'md',
      'njk',
    ],
  };
};
