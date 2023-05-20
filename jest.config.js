module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
};
