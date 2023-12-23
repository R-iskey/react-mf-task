const sharedLibraries = new Set([
  'swr',
]);

module.exports = {
  name: 'home',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (library) => {
    if (sharedLibraries.has(library)) {
      return false;
    }
  },
};
