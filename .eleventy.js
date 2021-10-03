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
    // pathPrefix: '/YOUR_REPO_NAME_HERE/', // omit this line if using custom domain
  };
};