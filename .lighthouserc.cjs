module.exports = {
  ci: {
    collect: {
      staticDistDir: "_site",
      staticDirFileDiscoveryDepth: 10,
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
