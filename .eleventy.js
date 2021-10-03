module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('src/assets');

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