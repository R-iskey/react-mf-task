const notSharedLibraries = new Set([
  'swr',
]);

module.exports = {
  name: 'users',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (library) => {
    if (notSharedLibraries.has(library)) {
      // @see: https://github.com/webpack/webpack/issues/16125
      return false;
    }
  },
};
